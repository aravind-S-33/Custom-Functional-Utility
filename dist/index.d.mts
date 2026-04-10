declare function pluck<T>(selector: string | string[], arr: T[]): any[];

type Lens = {
    path: string;
};
declare function lens(path: string): Lens;

declare function view<T>(lens: Lens, obj: T): any;

declare function set<T>(lens: Lens, value: any, obj: T): T;

export { lens, pluck, set, view };
