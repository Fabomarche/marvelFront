interface TextObject {
    type: string;
    language: string;
    text: string;
}

interface Url {
    type: string;
    url: string;
}

interface Series {
    resourceURI: string;
    name: string;
}

interface Price {
    type: string;
    price: number;
}

interface Thumbnail {
    path: string;
    extension: string;
}

interface Image {
    path: string;
    extension: string;
}

interface Creator {
    resourceURI: string;
    name: string;
    role: string;
}

interface Item {
    resourceURI: string;
    name: string;
}

interface Stories {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

interface Characters {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

interface Events {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface ComicType {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Url[];
    series: Series;
    variants: any[];
    collections: any[];
    collectedIssues: any[];
    dates: { type: string; date: string }[];
    prices: Price[];
    thumbnail: Thumbnail;
    images: Image[];
    creators: {
        available: number;
        collectionURI: string;
        items: Creator[];
        returned: number;
    };
    characters: Characters;
    stories: Stories;
    events: Events;
}