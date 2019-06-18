
// export interface Rent {

//     RentId?: number;
//     Available?: string;
//     PricePerMonth?: number;
//     Description?: string;
//     UtilitiesIncluded?: boolean;
//     PetsAllowed?: boolean;
//     IsRentFavorite?: boolean;

// }

export interface Rent {
    RentId: number;
    RealEstatePropertyId: number;
    Available: Date;
    Description: string;
    Bedroom: number;
    RealEstatePropertyName: string;
    RealEstateAddress: string;
    RealEstateCity: string;
    RealEstateState: string;
    RealEstateZip: number;
    ImageLink: string;
    PropertyType: PropertyTypeEnum;
    SquareFootage: number;
    Bathroom: number;
    Stories: number;
    HasBasement: boolean;
    HasPool: boolean;
    IsRentFavorite: boolean,
    PricePerMonth: number;
    UtilitiesIncluded: boolean;
    PetsAllowed: boolean;

}

export enum PropertyTypeEnum{
    Residential = 1,
    Commercial,
    Industrial,
    Land
}