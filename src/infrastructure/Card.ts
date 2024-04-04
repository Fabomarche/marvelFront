export interface Card {
    id: number;
    title: string;
    imgSrc: string;
}

export interface CardProps extends Card { }
export interface FavoriteType extends Card { }
export interface ResumeProps extends Card {
    description: string
}