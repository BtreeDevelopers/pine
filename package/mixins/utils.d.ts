import { PineApi } from '../../package';
export declare function getColor(color: string, pine: PineApi): string | false;
export declare function percentToHex(p: number): string;
export declare function getValueWithUnit(value: string | number): string;
export declare function getAllChildren(children: any[]): any[];
export declare function addOnceEventListener(el: HTMLElement, eventName: string, cb: Function, options?: boolean): void;
declare let passiveSupported: boolean;
export { passiveSupported };
