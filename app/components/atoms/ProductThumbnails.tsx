import styled from "styled-components/native";

import { ThumbnailsProps } from "@/types/ThumbnailProps";

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