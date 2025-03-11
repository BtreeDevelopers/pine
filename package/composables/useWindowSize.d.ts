export declare function useSize(): {
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    breakpoint: import("vue").Ref<"small" | "medium" | "large" | "xlarge">;
    breakpointRange: {
        smAndDown: boolean;
        smAndUp: boolean;
        mdAndDown: boolean;
        mdAndUp: boolean;
        lgAndDown: boolean;
        lgAndUp: boolean;
    };
};
