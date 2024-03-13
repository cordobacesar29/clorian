export interface IProductType {
  id: number;
  name: string;
  description: string;
  validityDate: string;
  price: number; 
  image: any
}

export interface ICartType extends IProductType {
  amount: number;
}