import styled from "styled-components/native";

import { Product as ProductType } from '../../../types/ProductTypes';
import { useState, useEffect } from "react";

interface SizeQuantitiesProps {
    product: ProductType;
}

const SizeQuantities = ({ product }: SizeQuantitiesProps) => {
    const [ display, setDisplay ] = useState<'flex' | 'none'>('flex')

    // get size data
    const sizesData = product.skus.reduce((sizesData, sku) => {
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

    // transform size data into an array
    const sizesDataArray = Object.entries(sizesData);

    // pack value
    const packValue =
        (sizesData.gSizeQuantity || 0) +
        (sizesData.ggSizeQuantity || 0) +
        (sizesData.mSizeQuantity || 0) +
        (sizesData.pSizeQuantity || 0) ;

    // making shure that pack value isn't 0
    if(packValue === 0) setDisplay('none')

    // display set
    const VisibilityStyles = {
        display: display
    }

    return (
        <Container style={VisibilityStyles}>
            {sizesDataArray.map(([key, value]) => {
                // format the key to show the size indicator (G, GG, M, P)
                const size = key.includes('Indicator') ? value : null;
                
                // ensure the key is one of the valid ones for sizesData
                const quantityKey = key.includes('Quantity') ? key : null;
                const quantity = quantityKey ? sizesData[quantityKey as keyof typeof sizesData] : null;

                // only render if size and quantity are available
                return size && quantity ? (
                    <QuantityContainer key={size}>
                        <SizeLetter>{size}</SizeLetter>
                        <QuantitySpan>{quantity}</QuantitySpan>
                    </QuantityContainer>
                ) : null;
            })}
            <QuantityContainer>
                <SizeLetter>
                    Pack:
                </SizeLetter>
                <QuantitySpan>
                    { packValue }
                </QuantitySpan>
            </QuantityContainer>
        </Container>
    );
};

export default SizeQuantities;

const Container = styled.View``;

const QuantityContainer = styled.View``;
const SizeLetter = styled.Text``;
const QuantitySpan = styled.Text``;