import styled from "styled-components/native";
import { ThumbnailsProps } from "@/types/ThumbnailProps";

import ThumbnailButton from "./ThumbnailButton";

const ProductThumbnails = ({ product, onThumbnailClick }: ThumbnailsProps) => {
    return (
        <ThumbnailsContainer>
            {product.images.map((image, index) => (
                <ThumbnailButton
                    key={image.id || index}
                    index={index}
                    image={image}
                    onThumbnailClick={onThumbnailClick}
                />
            ))}
        </ThumbnailsContainer>
    );
};

export default ProductThumbnails;

const ThumbnailsContainer = styled.View``;
