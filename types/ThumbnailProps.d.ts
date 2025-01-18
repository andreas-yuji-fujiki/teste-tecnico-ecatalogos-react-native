import { Product as ProductType} from './ProductTypes';
export interface ThumbnailsProps {
    product: ProductType;
    onThumbnailClick: (imagePath: string) => void;
};