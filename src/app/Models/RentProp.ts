import { MainProp } from './MainProp';



export enum PropertyTypeEnum {
    Residential = 1,
    Commercial,
    Industrial,
    Land
}


export interface RentProp {
    RealEstatePropertyId: number;
    RealEstatePropertyName: string;
    ImageLink: string;
    SquareFootage: number;
    RealEstateAddress: string;
    RealEstateCity: string;
    RealEstateState: string;
    RealEstateZip: number;
    PropertyType: PropertyTypeEnum;
    HasBasement: boolean;
    HasPool: boolean;
    Bedroom: number;
    Bathroom: number;
    Stories: number;

    RentId?: number;
    DateAvailable?: Date;
    PricePerMonth?: number;
    Description?: string;
    UtilitiesIncluded?: boolean;
    PetsAllowed?: boolean;
    IsRentFavorite?: boolean;
}