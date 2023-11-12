export const urlUtil = {
    isDev: (): boolean => {
        return urlUtil.queries().dev === "true";
    },
    isPrintMode: (): boolean => {
        return urlUtil.queries().print === "true";
    },
    convertIfNumber: (input: number | string): number | string => {
        if (typeof input === "string") {
            const num = parseInt(input, 10);
            if (!isNaN(num)) {
                return num;
            } else {
                return input;
            }
        } else {
            throw new TypeError("Input must be a string");
        }
    },
    queries: (): any => {
        if (!process.browser) {
            return {};
        }
        // @ts-ignore
        return location.search
            .replace("?", "")
            .split("&")
            .map((v: string) => v.split("="))
            .filter((v: string[]) => v.length > 0 && v[0] !== "")
            .reduce(
                (pre: any, [key, value]: any) => ({
                    ...pre,
                    [key]: urlUtil.convertIfNumber(value)
                }),
                {}
            );
    }
};
