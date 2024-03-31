interface Thumbnail {
    path: string;
    extension: string;
}

export interface FavoriteType {
    id: number;
    title: string;
    thumbnail: Thumbnail;
}