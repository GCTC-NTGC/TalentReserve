import React from "react";
import { Application } from "../types";
import { SelectOption } from "../Select";
import ApplicationView from "./Application";

interface BucketViewProps {
  title: string;
  description: string;
  applications: Application[];
  reviewStatusOptions: SelectOption<number>[];
}

/**
 * Applicant Buckets
 * There are 4 applicant buckets:
 *  - [1] Priority Applicants (this bucket will not be used at first and is replaced by the "temporary priority alert outlined above.)
 *  - [2] Veteran & Citzen Applicants
 *  - [3] Non-Canadian Applicants
 *  - [4] Unqualified Applicants (These applicants claimed to have the required essential criteria at a lower level than the job poster asked for.)
 * The larger page categories outlined earlier contain unique combinations of these buckets:
 *  - 1 and 2 appear in the "primary" category
 *  - 3 and 4 appear in the "secondary" category
 *  - The "tertiary" category contains all 4, each displaying only the candidates that have been screened out in that bucket.
 */
const BucketView: React.StatelessComponent<BucketViewProps> = (
  props
): React.ReactElement | null => {
  if (props.applications.length === 0) {
    return null;
  }

  return (
    <div className="accordion applicant-bucket">
      <button
        aria-expanded="false"
        className="accordion-trigger"
        tabIndex={0}
        type="button"
      >
        <span className="bucket-title">
          <i className="fas fa-ban" /> {props.title} (
          {props.applications.length})
        </span>

        <span className="invisible">
          Toggle this step to view relevant applicants.
        </span>

        <i className="fas fa-chevron-up" />
      </button>

      {/* Accordion Content */}
      <div aria-hidden="true" className="accordion-content">
        <p>{props.description}</p>

        {props.applications.map(application => (
          <ApplicationView
            key={application.id}
            application={application}
            reviewStatusOptions={props.reviewStatusOptions}
          />
        ))}
      </div>
    </div>
  );
};

export default BucketView;
