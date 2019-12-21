import { WorksState } from "~/types/state";
import worksJsonData from "~/static/json/works.json";

export const state = (): WorksState => ({
    private: worksJsonData.private,
    company: []
});
