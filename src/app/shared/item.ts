export class Item {
    id: string;
    name: string;
    count: number;
    location: ELocation;
}

export enum ELocation {
    Pantry = 0,
    Cellar = 1
}
