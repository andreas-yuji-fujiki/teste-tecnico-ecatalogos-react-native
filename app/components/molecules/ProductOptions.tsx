import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";

import InfoSet from "../atoms/InfoSet";
import SearchSet from "../atoms/SearchSet";

import ProductThumbnails from "../atoms/ProductThumbnails";
import CartButton from "../atoms/CartButton";

import { Product as ProductType } from '../../../types/ProductTypes';
interface ProductOptionsProps {
    product: ProductType;
    searchInputValue: string;
    onSubmitSearch: (event?: GestureResponderEvent) => void;
    onThumbnailClick: (imagePath: string) => void;
}

const ProductOptions = ( { 
    product, 
    searchInputValue, 
    onSubmitSearch,
    onThumbnailClick
} : ProductOptionsProps) => {
    return (
        <ProductOptionsContainer>
            <InfoSet product={product} />

            <SearchSet 
                searchInputValue={searchInputValue} 
                onSubmitSearch={onSubmitSearch} 
            />

            <ProductThumbnails 
                product={product}
                onThumbnailClick={onThumbnailClick}
            />

            <CartButton />
        </ProductOptionsContainer>  
    );
};
export default ProductOptions;

const ProductOptionsContainer = styled.View``;