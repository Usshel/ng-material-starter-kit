export interface StoreApiProductsModel {
  data: {
    readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly category: {
    name: string 
  }
}
}
