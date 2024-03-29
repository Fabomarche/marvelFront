type ThumbnailType = {
    path: string;
    extension: string;
};

type UrlType = {
    type: string;
    url: string;
};

export type CharacterType = {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: ThumbnailType;
    resourceURI: string;
    comics: {
        available: number;
        collectionURI: string;
        items: any[]; // CHECK
        returned: number;
    };
    series: {
        available: number;
        collectionURI: string;
        items: any[]; // CHECK
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: any[]; // CHECK
        returned: number;
    };
    events: {
        available: number;
        collectionURI: string;
        items: any[]; // CHECK
        returned: number;
    };
    urls: UrlType[];
};
