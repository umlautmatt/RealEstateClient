export interface Buy {
    BuyId: number;
    RealEstatePropertyId: number;
    DateAvail: Date;
    Description: string;
    Price: number;
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
}

export enum PropertyTypeEnum{
    Residential = 1,
    Commercial,
    Industrial,
    Land
}