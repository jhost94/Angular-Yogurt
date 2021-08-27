export interface News {
    id: string;
    title: string;
    description: string;
    content: string;
    imgPath: string;
    date: number;
}

export type NewsList = News[];