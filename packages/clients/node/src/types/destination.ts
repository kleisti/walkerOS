import type { Destination, WalkerOS } from '@elbwalker/types';

export interface Function<Custom = unknown, EventCustom = unknown>
  extends Destination.Function<Custom, EventCustom> {
  push: PushFn<Custom, EventCustom>;
  init?: InitFn<Custom, EventCustom>;
  setup?: SetupFn<Custom, EventCustom>;
}

export type PushFn<Custom, EventCustom> = (
  events: PushEvents<EventCustom>,
  config: Config<Custom, EventCustom>,
) => Promise<Push> | void;

export type InitFn<Custom, EventCustom> = (
  config: Config<Custom, EventCustom>,
) => Promise<boolean | Config<Custom, EventCustom>>;

export type SetupFn<Custom, EventCustom> = (
  config: Config<Custom, EventCustom>,
) => Promise<boolean | Config<Custom, EventCustom>>;

export interface Config<Custom = unknown, EventCustom = unknown>
  extends Destination.Config<Custom, EventCustom> {}

export interface Mapping<EventCustom>
  extends Destination.Mapping<EventCustom> {}

export interface EventConfig<EventCustom = unknown>
  extends Destination.EventConfig<EventCustom> {}

export type PushEvents<EventCustom = unknown> = Array<PushEvent<EventCustom>>;

export type PushEvent<EventCustom = unknown> = {
  event: WalkerOS.Event;
  mapping?: EventConfig<EventCustom>;
};

export type Ref = {
  id: string;
  destination: Function;
};

export type Push = {
  queue?: WalkerOS.Events;
  error?: unknown;
};

export type PushSuccess = Array<Ref>;

export type PushFailure = Array<Ref & { error: PushError }>;

export type PushError = string;

export type PushResult = {
  successful: PushSuccess;
  queued: PushSuccess;
  failed: PushFailure;
};

export type SetupResult = {
  successful: PushSuccess;
  failed: PushFailure;
};
