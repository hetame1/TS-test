// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
    (food: string): void;
}

// type alias
type PersonList = string[];

// interface
interface IPersonList {
    [index: number]: string;
}

interface ErrorHandling {
    success: boolean;
    error?: { message: string }
}

interface ArtistsData {
    artists: { name: string }[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistResponse;