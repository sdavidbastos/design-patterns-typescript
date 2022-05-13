import { TypePromise } from '.';

export enum PromiseStates {
  PENDING,
  FULFILLED,
  REJECTED,
}

export type ResolveFunction = (value: any) => any;
export type RejectFunction = (reason: any) => any;
export type Thennable = { then: (value: any) => TypePromise };
export type Nullable<T> = T | null;

export type ExecutorFunction = (
  resolve: ResolveFunction,
  reject: RejectFunction,
) => void;

export type HandlerFunction = {
  onFulfilled?: ResolveFunction;
  onRejected?: Nullable<RejectFunction>;
};
