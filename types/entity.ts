export interface Work {
    id: string;
    title: string;
    image: string;
    video: string;
    date: string;
    description: string;
    skill: string;
    link: Link;
}

export interface Link {
    url: string;
    isExternal: boolean;
}

export enum ArtworkType {
    WEB = "web",
    VIDEO = "video"
}
