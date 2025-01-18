import styled from "styled-components/native";
import { Product as ProductType} from '../../../types/ProductTypes';

interface ThumbnailsProps {
    product: ProductType;
    onThumbnailClick: (imagePath: string) => void;
};

const ProductThumbnails = ( { product, onThumbnailClick } : ThumbnailsProps ) => {
    return(
        <ThumbnailsContainer>
            {product.images.map((image) => {
                <ThumbnailImage 
                    key={product.id} 
                    source={image.path}
                    onPress={() => onThumbnailClick(image.path)}
                />
            })}
        </ThumbnailsContainer>
    );
};
export default ProductThumbnails;

const ThumbnailsContainer = styled.View``;
const ThumbnailImage = styled.Image``;