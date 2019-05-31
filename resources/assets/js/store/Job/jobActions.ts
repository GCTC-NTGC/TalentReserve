import { getJobEndpoint, parseJobResponse, parseJob } from "../../api/job";
import { Job, Criteria } from "../../models/types";
import {
  AsyncFsaActions,
  RSAActionTemplate,
  asyncGet,
  asyncPut,
} from "../asyncAction";
import createAction, { Action } from "../createAction";

export const FETCH_JOB_STARTED = "JOB: GET STARTED";
export const FETCH_JOB_SUCCEEDED = "JOB: GET SUCCEEDED";
export const FETCH_JOB_FAILED = "JOB: GET FAILED";

export type FetchJobAction = AsyncFsaActions<
  typeof FETCH_JOB_STARTED,
  typeof FETCH_JOB_SUCCEEDED,
  typeof FETCH_JOB_FAILED,
  { job: Job; criteria: Criteria[] },
  { id: number }
>;

export const fetchJob = (
  id: number,
): RSAActionTemplate<
  typeof FETCH_JOB_STARTED,
  typeof FETCH_JOB_SUCCEEDED,
  typeof FETCH_JOB_FAILED,
  { job: Job; criteria: Criteria[] },
  { id: number }
> =>
  asyncGet(
    getJobEndpoint(id),
    FETCH_JOB_STARTED,
    FETCH_JOB_SUCCEEDED,
    FETCH_JOB_FAILED,
    parseJobResponse,
    { id },
  );

export const UPDATE_JOB_STARTED = "JOB: UPDATE STARTED";
export const UPDATE_JOB_SUCCEEDED = "JOB: UPDATE SUCCEEDED";
export const UPDATE_JOB_FAILED = "JOB: UPDATE FAILED";

export type UpdateJobAction = AsyncFsaActions<
  typeof UPDATE_JOB_STARTED,
  typeof UPDATE_JOB_SUCCEEDED,
  typeof UPDATE_JOB_FAILED,
  Job,
  { id: number }
>;

export const updateJob = (
  job: Job,
): RSAActionTemplate<
  typeof UPDATE_JOB_STARTED,
  typeof UPDATE_JOB_SUCCEEDED,
  typeof UPDATE_JOB_FAILED,
  Job,
  { id: number }
> =>
  asyncPut(
    getJobEndpoint(job.id),
    job,
    UPDATE_JOB_STARTED,
    UPDATE_JOB_SUCCEEDED,
    UPDATE_JOB_FAILED,
    parseJob,
    { id: job.id },
  );

export const EDIT_JOB = "JOB: EDIT";
export type EditJobAction = Action<typeof EDIT_JOB, Job>;
export const editJob = (job: Job): EditJobAction => ({
  type: EDIT_JOB,
  payload: job,
});

export const CLEAR_JOB_EDIT = "JOB: CLEAR EDITS";
export type ClearEditJobAction = Action<typeof CLEAR_JOB_EDIT, number>;
export const clearJobEdit = (jobId: number): ClearEditJobAction => ({
  type: CLEAR_JOB_EDIT,
  payload: jobId,
});

export type JobAction =
  | FetchJobAction
  | UpdateJobAction
  | EditJobAction
  | ClearEditJobAction;

export default { fetchJob };
