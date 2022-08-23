import { IElbwalker } from '../types';
export declare function ready(run: Function, elbwalker: IElbwalker.Function): void;
export declare function initTrigger(prefix: string): void;
export declare function triggerLoad(prefix: string): void;
export declare function triggerVisible(prefix: string, scope: Document | Element, disconnect?: boolean): IntersectionObserver | undefined;
