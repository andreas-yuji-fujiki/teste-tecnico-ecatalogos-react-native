import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";

import InfoSet from "../atoms/InfoSet";
import SearchSet from "../atoms/SearchSet";

import ProductThumbnails from "../atoms/ProductThumbnails";
import CartButton from "../atoms/CartButton";

import Colors from "@/app/constants/Colors";

import { Product as ProductType } from '../../../types/ProductTypes';
interface ProductOptionsProps {
    product: ProductType;
    searchInputValue: string;
    onSubmitSearch: (event?: GestureResponderEvent) => void;
    onThumbnailClick: (imagePath: string) => void;
    onSearchInputChange: Function;
    searchInputError: string;
}

const ProductOptions = ( { 
    product, 
    searchInputValue,
    onSearchInputChange, 
    onSubmitSearch,
    onThumbnailClick,
    searchInputError,
} : ProductOptionsProps) => {
    return (
        <ProductOptionsContainer>
            <InfoSet product={product} />

            <SearchSet 
                searchInputValue={searchInputValue} 
                onSearchInputChange={onSearchInputChange}
                onSubmitSearch={onSubmitSearch}
                error={searchInputError}
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

const ProductOptionsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 6px 0;

    border-top-width: 3px;
    border-top-color: ${Colors.blueGray};
    border-top-style: solid;
`;