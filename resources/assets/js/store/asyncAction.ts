import {
  RSAA,
  RSAAction,
  HTTPVerb,
  RequestError,
  ApiError,
  InternalError,
  getJSON,
} from "redux-api-middleware"; // RSAA = '@@redux-api-middleware/RSAA'
import { ErrorAction } from "./createAction";

export const STARTED = "STARTED";
export const SUCCEEDED = "SUCCEEDED";
export const FAILED = "FAILED";

export interface StartedAction<T extends string, M> {
  type: T;
  meta: M;
  error?: boolean;
}

export interface SucceededAction<T extends string, P, M> {
  type: T;
  payload: P;
  meta: M;
  error?: boolean;
}

export interface FailedAction<T extends string, M = {}>
  extends ErrorAction<T, M> {
  type: T;
  payload: RequestError | ApiError | InternalError | Error; // TODO: remove normal error when all async actions using this
  meta: M;
  error: true;
}

/** The set of Flux Standard Actions which may result from an async request */
export type AsyncFsaActions<
  R extends string,
  S extends string,
  F extends string,
  P,
  M
> = StartedAction<R, M> | SucceededAction<S, P, M> | FailedAction<F, M>;

/** Internal definition, that doesn't quite represent final dispatched actions */
interface StartedActionCreator<T extends string, M> {
  type: T;
  meta: M;
}

/** Internal definition, that doesn't quite represent final dispatched actions */
interface SucceededActionCreator<T extends string, P, M> {
  type: T;
  payload: (action, state, res) => PromiseLike<P>;
  meta: M;
}

/** Internal definition, that doesn't quite represent final dispatched actions */
interface FailedActionCreator<T extends string, M> {
  type: T;
  meta: M;
}

/** A convenience type, for defining the return value of the rsa action generator. */
export type RSAActionTemplate<
  R extends string,
  S extends string,
  F extends string,
  P,
  M
> = RSAAction<
  StartedActionCreator<R, M>,
  SucceededActionCreator<S, P, M>,
  FailedActionCreator<F, M>
>;

// TODO: is this the best way to get this?
const csrfElement = document.head.querySelector('meta[name="csrf-token"]');
const csrfToken: string =
  csrfElement && csrfElement.textContent ? csrfElement.textContent : "";

export const asyncAction = <
  R extends string,
  S extends string,
  F extends string,
  P,
  M
>(
  endpoint: string,
  method: HTTPVerb,
  startedType: R,
  succeededType: S,
  failedType: F,
  parseResponse: (response: any) => P,
  metaData: M,
): RSAActionTemplate<R, S, F, P, M> => {
  return {
    [RSAA]: {
      endpoint,
      method,
      headers: { "X-CSRF-TOKEN": csrfToken },
      types: [
        {
          type: startedType,
          meta: metaData,
        },
        {
          type: succeededType,
          payload: (action, state, res: Response): PromiseLike<P> =>
            getJSON(res).then(parseResponse),
          meta: metaData,
        },
        {
          type: failedType,
          meta: metaData,
        },
      ],
    },
  };
};

export default asyncAction;