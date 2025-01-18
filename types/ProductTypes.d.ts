type Product = {
    id: number;
    name: string;
    reference: string;
    gender: string;
    category: string;
    subcategory: string | null;
    prompt_delivery: boolean;
    skus: Sku[];
    companies: {
      key: number;
    };
    brand: string;
    price: number;
    colors: any[];
    images: Image[];
  };
  
  type Sku = {
    id: number;
    size: string;
    stock: number;
    open_grid: boolean;
    
    min_quantity: number;

    gSizeIndicator: string;
    gSizeQuantity: number;

    ggSizeIndicator: string;
    ggSizeQuantity: number;

    mSizeIndicator: string;
    mSizeQuantity: number;

    pSizeIndicator: string;
    pSizeQuantity: number;
  };
  
  type Image = {
    id: number;
    order: number;
    path: string;
  };
  
  type ProductsResponse = {
    products: Product[];
  };
  
  export type { Product, Sku, Image };