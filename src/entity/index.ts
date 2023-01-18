export interface IGame {
    thumbnail: string;
    originalPrice: number;
    discountPercent: number;
    description: IGameDescription;
}

export interface IGameDescription {
    name: string;
    about: string;
    releaseDate: Date;
    genre: string[];
}
