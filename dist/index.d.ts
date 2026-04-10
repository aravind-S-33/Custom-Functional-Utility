declare function map<T, U>(fn: (item: T, index: number, array: T[]) => U, arr: T[]): U[];

declare function filter<T>(predicate: (item: T, index: number, array: T[]) => boolean, arr: T[]): T[];

declare function reduce<T, U>(reducer: (acc: U, current: T, index: number, array: T[]) => U, initialValue: U, arr: T[]): U;

declare function reduceRight<T, U>(reducer: (acc: U, current: T, index: number, array: T[]) => U, initialValue: U, arr: T[]): U;

declare function some<T>(predicate: (item: T, index: number, array: T[]) => boolean, arr: T[]): boolean;

declare function every<T>(predicate: (item: T, index: number, array: T[]) => boolean, arr: T[]): boolean;

declare function find<T>(arr: T[], arg1: ((item: T, index: number, array: T[]) => boolean) | keyof T, arg2?: any): T | undefined;

export { every, filter, find, map, reduce, reduceRight, some };

declare function pluck<T>(selector: string | string[], arr: T[]): any[];

type Lens = {
    path: string;
};
declare function lens(path: string): Lens;

declare function view<T>(lens: Lens, obj: T): any;

declare function set<T>(lens: Lens, value: any, obj: T): T;

export { lens, pluck, set, view };
