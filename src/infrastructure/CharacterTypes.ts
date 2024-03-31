type ThumbnailType = {
    path: string;
    extension: string;
};

type UrlType = {
    type: string;
    url: string;
};

type Comics = {
    resourceURI: string;
    name: string;
}

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
        items: Comics[];
        returned: number;
    };
    series: {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    };
    events: {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    };
    urls: UrlType[];
};
