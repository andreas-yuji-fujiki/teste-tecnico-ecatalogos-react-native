import { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import ProductOptions from "../molecules/ProductOptions";

import ProductData from '../../../assets/data/productsData.json';
const Products = ProductData.products

const ProductSlider = () => {
    const [ currentProductIndex, setCurrentProductIndex ] = useState<number>(0)

    // slider button handlers
    function handleNextSlider(){
        const ProductDataLength = Products.length

        if (currentProductIndex < ProductDataLength - 1) {
            setCurrentProductIndex( currentProductIndex + 1 );
        }
    }
    function handlePrevSlider(){
        if (currentProductIndex > 0) {
            setCurrentProductIndex( currentProductIndex - 1 );
        }
    }
    console.log(Products[currentProductIndex])

    return(
        <ProductSliderContainer>
            <FlatList
                data={Products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <SliderImage 
                        key={item.id} 
                        source={{ uri: item.images[0]?.path }} 
                        resizeMode='contain' />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <ProductOptions
                onSubmitSearch={handleNextSlider}
                onThumbnailClick={handlePrevSlider}
                product={Products[currentProductIndex]}
                searchInputValue="oi"
            />
        </ProductSliderContainer>
    );
};
export default ProductSlider;

const ProductSliderContainer = styled.View``;
const SliderImage = styled.Image`
    height: 400px;
    width: 412px;
`