declare interface IGetListOfListDemoWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'GetListOfListDemoWebPartStrings' {
  const strings: IGetListOfListDemoWebPartStrings;
  export = strings;
}
