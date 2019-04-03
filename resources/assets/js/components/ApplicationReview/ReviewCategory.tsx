import React from "react";
import Swal from "sweetalert2";
import { Application } from "../types";
import { SelectOption } from "../Select";
import { applicationBucket } from "./helpers";
import ApplicantBucket from "./ApplicantBucket";
import { ReviewStatusId } from "../lookupConstants";

interface ReviewCategoryProps {
  title: string;
  description: string;
  showScreenOutAll: boolean;
  applications: Application[];
  reviewStatusOptions: SelectOption<number>[];
  onStatusChange: (applicationId: number, statusId: number | null) => void;
  onBulkStatusChange: (
    applicationIds: number[],
    statusId: number | null
  ) => void;
  onNotesChange: (applicationId: number, notes: string | null) => void;
  savingStatuses: { applicationId: number; isSaving: boolean }[];
  prioritizeVeterans: boolean;
}

const ReviewCategory: React.StatelessComponent<ReviewCategoryProps> = ({
  title,
  description,
  showScreenOutAll,
  applications,
  reviewStatusOptions,
  onStatusChange,
  onBulkStatusChange,
  onNotesChange,
  savingStatuses,
  prioritizeVeterans
}: ReviewCategoryProps): React.ReactElement | null => {
  if (applications.length === 0) {
    return null;
  }

  const screenOutAll = (): void => {
    const applicationIds = applications.map(application => application.id);
    onBulkStatusChange(applicationIds, ReviewStatusId.ScreenedOut);
  };

  const handleScreenOutAllClick = (): void => {
    Swal.fire({
      title: "Are you sure you want to screen out all Optional candidates?",
      type: "question",
      showCancelButton: true,
      confirmButtonColor: "#0A6CBC",
      cancelButtonColor: "#F94D4D",
      confirmButtonText: "Confirm"
    }).then(result => {
      if (result.value) {
        screenOutAll();
      }
    });
  };

  const buckets = [
    {
      title: "Priority Applicants",
      description:
        "These are priority applicants for this position. They must be reviewed and considered first.",
      applications: applications.filter(
        application => applicationBucket(application) === "priority"
      )
    },
    {
      title: "Veterans and Canadian Citizens",
      description: "",
      applications: applications.filter(
        application => applicationBucket(application) === "citizen"
      )
    },
    {
      title: "Non-Canadian Citizens",
      description: "",
      applications: applications.filter(
        application => applicationBucket(application) === "non-citizen"
      )
    },
    {
      title: "Don't Meet Essential Criteria",
      description: "",
      applications: applications.filter(
        application => applicationBucket(application) === "unqualified"
      )
    }
  ];

  return (
    <div className="applicant-category">
      <h3 className="heading--03">{title}</h3>

      <p>{description}</p>

      <div className="flex-grid middle category-actions">
        <div className="box med-1of2">
          <button className="button--outline review-copy-emails" type="button">
            <span>Copy This Group's Emails</span>
            <span>Copied!</span>
          </button>
        </div>
        <div className="box med-1of2">
          {showScreenOutAll && (
            <button
              className="button--outline"
              type="button"
              onClick={handleScreenOutAllClick}
            >
              <i className="fas fa-ban" /> Screen All Optional Candidates Out
            </button>
          )}
        </div>
      </div>

      {buckets.map(bucket => (
        <ApplicantBucket
          key={bucket.title}
          {...bucket}
          reviewStatusOptions={reviewStatusOptions}
          onStatusChange={onStatusChange}
          onNotesChange={onNotesChange}
          savingStatuses={savingStatuses}
          prioritizeVeterans={prioritizeVeterans}
        />
      ))}
    </div>
  );
};

export default ReviewCategory;