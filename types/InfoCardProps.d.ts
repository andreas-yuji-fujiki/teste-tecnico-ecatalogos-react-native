import { Product as ProductType } from './ProductTypes';
export interface InfoCardProps {
    product: ProductType;
    display: "hidden" | "visible";
    onClose: Function;
}