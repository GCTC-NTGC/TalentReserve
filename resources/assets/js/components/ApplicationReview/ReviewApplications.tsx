import React from "react";
import dayjs from "dayjs";
import { FormattedMessage, defineMessages, useIntl } from "react-intl";
import { Application, Comment } from "../../models/types";
import { SelectOption } from "../Select";
import { applicationCategory } from "./helpers";
import ReviewCategory from "./ReviewCategory";
import ActivityFeed from "../ActivityFeed";
import { applicantReviewLocations } from "../../models/localizedConstants";
import { LocationId } from "../../models/lookupConstants";
import { Portal } from "../../models/app";
import { hasKey } from "../../helpers/queries";

const messages = defineMessages({
  underConsiderationTitle: {
    id: "review.applications.underConsideration.title",
    defaultMessage: "Under Consideration",
    description: "Under consideration category title",
  },
  underConsiderationDescription: {
    id: "review.applications.underConsideration.description",
    defaultMessage:
      "Review the applicants in the Veterans and Canadian Citizens section. If none or very few of these applicants meet the requirements, you can still consider non-Canadian Citizen applications in the Optional Consideration section",
    description: "Under consideration category description",
  },
  optionalConsiderationTitle: {
    id: "review.applications.optionalConsideration.title",
    defaultMessage: "Optional Consideration",
    description: "Optional consideration category title",
  },
  optionalConsiderationDescription: {
    id: "review.applications.optionalConsideration.description",
    defaultMessage:
      "In this group you will find the applicants who are not Canadian Citizens or do not claim to meet the essential criteria.",
    description: "Optional consideration category description",
  },
  screenedOutTitle: {
    id: "review.applications.screenedOut.title",
    defaultMessage: "No Longer Under Consideration",
    description: "Screened out category title",
  },
  screenedOutDescription: {
    id: "review.applications.screenedOut.description",
    defaultMessage: "These applications have already been screened out.",
    description: "Screened out category description",
  },
});

interface ReviewApplicationsProps {
  jobId: number;
  title: string;
  classification: string;
  closeDateTime: Date | null;
  applications: Application[];
  reviewStatusOptions: SelectOption[];
  onStatusChange: (applicationId: number, statusId: number | null) => void;
  onBulkStatusChange: (
    applicationIds: number[],
    statusId: number | null,
  ) => void;
  onNotesChange: (applicationId: number, notes: string | null) => void;
  savingStatuses: { applicationId: number; isSaving: boolean }[];
  portal: Portal;
}

const ReviewApplications: React.StatelessComponent<ReviewApplicationsProps> = ({
  jobId,
  title,
  classification,
  closeDateTime,
  applications,
  reviewStatusOptions,
  onStatusChange,
  onBulkStatusChange,
  onNotesChange,
  savingStatuses,
  portal,
}: ReviewApplicationsProps): React.ReactElement => {
  const intl = useIntl();
  const categories = [
    {
      id: messages.underConsiderationTitle.id,
      title: intl.formatMessage(messages.underConsiderationTitle),
      description: intl.formatMessage(messages.underConsiderationDescription),
      showScreenOutAll: false,
      applications: applications.filter(
        application => applicationCategory(application) === "primary",
      ),
      prioritizeVeterans: false,
    },
    {
      id: messages.optionalConsiderationTitle.id,
      title: intl.formatMessage(messages.optionalConsiderationTitle),
      description: intl.formatMessage(
        messages.optionalConsiderationDescription,
      ),
      showScreenOutAll: true,
      applications: applications.filter(
        (application): boolean =>
          applicationCategory(application) === "optional",
      ),
      prioritizeVeterans: true,
    },
    {
      id: messages.screenedOutTitle.id,
      title: intl.formatMessage(messages.screenedOutTitle),
      description: intl.formatMessage(messages.screenedOutDescription),
      showScreenOutAll: false,
      applications: applications.filter(
        (application): boolean =>
          applicationCategory(application) === "screened-out",
      ),
      prioritizeVeterans: true,
    },
  ];

  return (
    <section className="applicant-review container--layout-xl">
      <div className="flex-grid gutter">
        <div className="box med-1of2 job-title-wrapper">
          <span>
            <FormattedMessage
              id="review.applications.indexPageTitle"
              defaultMessage="Applications for: {jobTitle} {jobClassification}"
              description="Welcome header on Job Applications index page"
              values={{
                jobTitle: title,
                jobClassification: classification,
              }}
            />
          </span>
        </div>

        <div className="box med-1of2 timer-wrapper">
          <i className="fas fa-stopwatch" />
          &nbsp;
          <FormattedMessage
            id="job.daysSinceClosed"
            defaultMessage="{dayCount, plural,
              =0 {No Days}
            one {# Day}
          other {# Days}
        } Since Close"
            description="Welcome header on app main page"
            values={{
              // TODO: Think more carefully about how to handle null fields
              dayCount: dayjs().diff(
                closeDateTime ? dayjs(closeDateTime) : dayjs(),
                "day",
              ),
            }}
          />
        </div>
      </div>
      <div data-clone>
        <div data-c-margin="bottom(1)">
          <ActivityFeed
            jobId={jobId}
            isHrAdvisor={portal === "hr"}
            generalLocation={LocationId.applicantsGeneric}
            locationMessages={applicantReviewLocations}
            filterComments={(comment: Comment): boolean =>
              hasKey(applicantReviewLocations, comment.location)
            }
          />
        </div>
      </div>
      {categories.map(
        (category): React.ReactElement => (
          <ReviewCategory
            key={category.id}
            {...category}
            reviewStatusOptions={reviewStatusOptions}
            onStatusChange={onStatusChange}
            onNotesChange={onNotesChange}
            savingStatuses={savingStatuses}
            onBulkStatusChange={onBulkStatusChange}
            portal={portal}
          />
        ),
      )}
    </section>
  );
};

export default ReviewApplications;
