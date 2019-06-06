export interface MainProp {
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
  }

  export enum PropertyTypeEnum{
      Residential = 1,
      Commercial, Industrial, Land
  }