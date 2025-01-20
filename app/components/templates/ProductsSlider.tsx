import { useState, useRef } from "react";
import { FlatList, Dimensions } from "react-native";
import styled from "styled-components/native";

import useCart from "@/app/hooks/useCart";

import AppHeader from "../molecules/AppHeader";
import CarouselButton from "../atoms/CarouselButton";
import ProductOptions from "../molecules/ProductOptions";
import ProductVisibleData from "../atoms/ProductVisibleData";
import ProductQuantityAndValuesInfo from "../atoms/ProductQuantityAndValuesInfo";
import SizeQuantities from "../atoms/SizeQuantities";

import ProductData from '../../../assets/data/productsData.json';
const Products = ProductData.products;

const ProductSlider = () => {
    // hooks
    const { totalValue, addToCart, removeFromCart } = useCart();

    // state to store the current value of each product
    const [currentValues, setCurrentValues] = useState<{ [key: number]: number }>({});

    // state to store the quantity of each product
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    // current product
    const [currentProductIndex, setCurrentProductIndex] = useState<number>(0);
    const [currentImagePath, setCurrentImagePath] = useState<string>(Products[currentProductIndex]?.images[0]?.path || '');
    const CurrentProduct = Products[currentProductIndex];

    // refs
    const flatListRef = useRef<FlatList>(null);

    // skus info
    const sizesData = CurrentProduct.skus.reduce((sizesData, sku) => {
        if (sku.size === 'G') {
            sizesData.gSizeIndicator = 'G';
            sizesData.gSizeQuantity = sku.min_quantity;
        }
        if (sku.size === 'GG') {
            sizesData.ggSizeIndicator = 'GG';
            sizesData.ggSizeQuantity = sku.min_quantity;
        }
        if (sku.size === 'M') {
            sizesData.mSizeIndicator = 'M';
            sizesData.mSizeQuantity = sku.min_quantity;
        }
        if (sku.size === 'P') {
            sizesData.pSizeIndicator = 'P';
            sizesData.pSizeQuantity = sku.min_quantity;
        }

        return sizesData;
    }, {} as { [key: string]: any });

    const packValue =
        (sizesData.gSizeQuantity || 0) +
        (sizesData.ggSizeQuantity || 0) +
        (sizesData.mSizeQuantity || 0) +
        (sizesData.pSizeQuantity || 0);

    // category carousel
    const categories = Array.from(
        new Set(Products.map(product => product.category))
    );

    // 2. Filtrar os produtos pela categoria selecionada
    const filterProductsByCategory = (selectedCategory: string) => {
        return Products.filter(product => product.category === selectedCategory);
    };

    // Calculando o número de produtos por categoria
    const getCategoryProductCount = (selectedCategory: string) => {
        const filteredProducts = filterProductsByCategory(selectedCategory);
        return filteredProducts.length;
    };

    function handleNextCategory() {
        const currentCategory = Products[currentProductIndex]?.category;
        const currentCategoryIndex = categories.indexOf(currentCategory);
        
        // Verifica se está na última categoria
        const nextCategoryIndex = (currentCategoryIndex + 1) % categories.length;
        const nextCategory = categories[nextCategoryIndex];
        
        if (nextCategoryIndex === 0) {
            // Se for a primeira categoria (voltando para o início), vai para o primeiro item da primeira categoria
            const filteredProducts = filterProductsByCategory(nextCategory);
            const firstProductInNextCategory = filteredProducts[0];
            const nextProductIndex = Products.indexOf(firstProductInNextCategory);
            
            setCurrentProductIndex(nextProductIndex);
            setCurrentImagePath(Products[nextProductIndex]?.images[0]?.path || "");
            flatListRef.current?.scrollToIndex({ index: nextProductIndex, animated: true });
        } else {
            const filteredProducts = filterProductsByCategory(nextCategory);
            const firstProductInNextCategory = filteredProducts[0];
            const nextProductIndex = Products.indexOf(firstProductInNextCategory);
            
            // Rolando para o primeiro item da próxima categoria
            setCurrentProductIndex(nextProductIndex);
            setCurrentImagePath(Products[nextProductIndex]?.images[0]?.path || "");
            flatListRef.current?.scrollToIndex({ index: nextProductIndex, animated: true });
        }
    }
    
    function handlePrevCategory() {
        const currentCategory = Products[currentProductIndex]?.category;
        const currentCategoryIndex = categories.indexOf(currentCategory);
        
        // Verifica se está na primeira categoria e no primeiro item
        if (currentCategoryIndex === 0 && currentProductIndex === 0) {
            const lastCategory = categories[categories.length - 1];
            const filteredProducts = filterProductsByCategory(lastCategory);
            const lastProductInLastCategory = filteredProducts[filteredProducts.length - 1];
            const lastProductIndex = Products.indexOf(lastProductInLastCategory);
            
            // Rolando para o último item da última categoria
            setCurrentProductIndex(lastProductIndex);
            setCurrentImagePath(Products[lastProductIndex]?.images[0]?.path || "");
            flatListRef.current?.scrollToIndex({ index: lastProductIndex, animated: true });
        } else {
            const prevCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
            const prevCategory = categories[prevCategoryIndex];
            
            const filteredProducts = filterProductsByCategory(prevCategory);
            const firstProductInPrevCategory = filteredProducts[0];
            const prevProductIndex = Products.indexOf(firstProductInPrevCategory);
            
            // Rolando para o primeiro item da categoria anterior
            setCurrentProductIndex(prevProductIndex);
            setCurrentImagePath(Products[prevProductIndex]?.images[0]?.path || "");
            flatListRef.current?.scrollToIndex({ index: prevProductIndex, animated: true });
        }
    }

    // slide directions handler
    function handleNextSlider() {
        const ProductDataLength = Products.length;
        let newIndex;
    
        if (currentProductIndex === ProductDataLength - 1) {
            newIndex = 0; // Se estiver no último item, volta para o primeiro
        } else {
            newIndex = currentProductIndex + 1;
        }
    
        setCurrentProductIndex(newIndex);
        setCurrentImagePath(Products[newIndex]?.images[0]?.path || "");
    
        // going to next item
        flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
    }
    
    function handlePrevSlider() {
        const ProductDataLength = Products.length;
        let newIndex;
    
        if (currentProductIndex === 0) {
            newIndex = ProductDataLength - 1; // Se estiver no primeiro item, vai para o último
        } else {
            newIndex = currentProductIndex - 1;
        }
    
        setCurrentProductIndex(newIndex);
        setCurrentImagePath(Products[newIndex]?.images[0]?.path || "");
    
        // scrolling the FlatList to the selected item
        flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
    }

    // onViewableItemsChanged handler to track which item is in view
    const onViewableItemsChanged = ({ viewableItems }: any) => {
        const visibleItem = viewableItems[0];
        if (visibleItem) {
            setCurrentProductIndex(visibleItem.index);
            setCurrentImagePath(visibleItem.item.images[0]?.path || "");
        }
    };

    // handling thumbnail click
    const handleThumbnailClick = (imagePath: string ) => {
        setCurrentImagePath(imagePath);
    };

    // updating the current value of each product (isolated)
    function handleCurrentValueAdd() {
        setCurrentValues(prevValues => ({
            ...prevValues,
            [currentProductIndex]: (prevValues[currentProductIndex] || 0) + (packValue === 0 ? CurrentProduct.price : CurrentProduct.price * packValue)
        }));

        // incrementing the isolated quantity for the product
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [currentProductIndex]: (prevQuantities[currentProductIndex] || 0) + 1
        }));

        // updating the cart
        if (packValue === 0) {
            addToCart(CurrentProduct.price);
        } else {
            addToCart(CurrentProduct.price * packValue);
        }
    }

    function handleCurrentValueRemove() {
        setQuantities(prevQuantities => {
            const currentQuantity = prevQuantities[currentProductIndex] || 0;
            if (currentQuantity > 0) {
                // only decrease the value in the cart if the quantity is greater than 0
                setCurrentValues(prevValues => ({
                    ...prevValues,
                    [currentProductIndex]: Math.max(0, (prevValues[currentProductIndex] || 0) - (packValue === 0 ? CurrentProduct.price : CurrentProduct.price * packValue))
                }));

                return {
                    ...prevQuantities,
                    [currentProductIndex]: currentQuantity - 1
                };
            }
            return prevQuantities; // do not change anything if quantity is 0
        });

        // do not update the cart if quantity is 0
        const currentQuantity = quantities[currentProductIndex] || 0;
        if (currentQuantity > 0) {
            if (packValue === 0) {
                removeFromCart(CurrentProduct.price);
            } else {
                removeFromCart(CurrentProduct.price * packValue);
            }
        }
    }

    // handle the search and scroll to the item
    const [searchInputValue, setSearchInputValue] = useState<string>('');
    const [searchInputerror, setSearchInputError] = useState<string>('')
    const handleSearchSubmit = () => {
        // Remove os pontos da string de pesquisa e da referência do produto
        const sanitizedSearchInput = searchInputValue.replace(/\./g, '');
        
        const foundProductIndex = Products.findIndex(product => 
            product.reference.replace(/\./g, '') === sanitizedSearchInput
        );
    
        if (foundProductIndex !== -1) {
            setCurrentProductIndex(foundProductIndex);
            setCurrentImagePath(Products[foundProductIndex]?.images[0]?.path || "");
            flatListRef.current?.scrollToIndex({ index: foundProductIndex, animated: true });
            setSearchInputValue('')
            setSearchInputError('')
        } else {
            // handle case where no product is found
            setSearchInputValue('')
            setSearchInputError('Produto não encontrado!')
        }
    };

    const categoryProductCount = getCategoryProductCount(CurrentProduct.category);

    return (
        <ProductCarouselContainer>
            {/* carousel */}
            <AppHeader
                categoryItemsQuantity={categoryProductCount}
                categoryName={CurrentProduct.category}
                onPrevCategory={handlePrevCategory}
                onNextCategory={handleNextCategory}
            />
            <CarouselContainer>
            <FlatList
    ref={flatListRef} // Assigning the reference
    horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    data={Products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item, index }) => (
        <CarouselImage 
            key={item.id} 
            source={{ uri: index === currentProductIndex ? currentImagePath : item.images[0]?.path }}
            resizeMode="contain" 
        />
    )}
    // track which items are visible
    onViewableItemsChanged={onViewableItemsChanged}
    viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
    getItemLayout={(data, index) => ({
        length: fullScreenWidth, // Largura do item
        offset: fullScreenWidth * index, // Posição do item
        index,
    })}
    onScrollToIndexFailed={(info) => {
        console.warn("Falha ao rolar para o índice:", info.index);
        flatListRef.current?.scrollToOffset({ offset: info.averageItemLength * info.index, animated: true });
    }}
/>
                <CarouselControlsContainer>
                    <CarouselButton
                        direction='left'
                        onPress={handlePrevSlider}
                    />
                    <CarouselButton
                        direction='right'
                        onPress={handleNextSlider}
                    />
                </CarouselControlsContainer>
            </CarouselContainer>

            {/* current product info */}
            <CurrentProductInfoContainer>
                <ProductOptions
                    product={CurrentProduct}
                    onThumbnailClick={handleThumbnailClick}
                    onSearchInputChange={(text: string) => {
                        setSearchInputValue(text);
                    }}
                    searchInputValue={String(searchInputValue)}
                    onSubmitSearch={handleSearchSubmit} // set the search submit function here
                    searchInputError={searchInputerror}
                />

                <ProductVisibleData
                    product={CurrentProduct}
                />
                
                <ProductQuantityAndValuesInfo
                    acumulated={totalValue}
                    current={currentValues[currentProductIndex] || 0} // isolated value for each product
                    onAdd={handleCurrentValueAdd} // increments value and quantity
                    onRemove={handleCurrentValueRemove} // decrements value and quantity, but does not update the cart if quantity is 0
                    quantity={quantities[currentProductIndex] || 0} // isolated quantity for each product
                />
                
                <SizeQuantities
                    product={CurrentProduct}
                />
            </CurrentProductInfoContainer>
        </ProductCarouselContainer>
    );
};
export default ProductSlider;


// styles
const fullScreenWidth = Dimensions.get('window').width;
const fullScreenHeight = Dimensions.get('window').height;

const ProductCarouselContainer = styled.View``;
const CarouselContainer = styled.View``;
const CarouselControlsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
    position: absolute;
    bottom: 55px;
    width: ${ () => fullScreenWidth};
`;
const CarouselImage = styled.Image`
    width: ${ () => fullScreenWidth }px; /* full screen width */
    height: ${ () => fullScreenHeight * 0.62 }px;
`;

const CurrentProductInfoContainer = styled.View`
    height: ${ () => fullScreenHeight / 3.25}px;
`;
