import { Work } from "~/types/entity";

export interface RootState {
    version: string;
}

export interface WorksState {
    private: Work[];
    company: Work[];
}
