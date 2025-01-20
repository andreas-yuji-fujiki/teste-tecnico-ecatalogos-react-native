import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { useState, useEffect } from "react";

import Colors from "@/app/constants/Colors";

// types
import { SizeQuantitiesProps } from "@/types/SizeQuantitiesProps";

const SizeQuantities = ({ product }: SizeQuantitiesProps) => {
    const [display, setDisplay] = useState<'flex' | 'none'>('flex');

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
    const sizesDataArray = [
        { size: sizesData.gSizeIndicator, quantity: sizesData.gSizeQuantity },
        { size: sizesData.ggSizeIndicator, quantity: sizesData.ggSizeQuantity },
        { size: sizesData.mSizeIndicator, quantity: sizesData.mSizeQuantity },
        { size: sizesData.pSizeIndicator, quantity: sizesData.pSizeQuantity },
    ];

    // pack value
    const packValue =
        (sizesData.gSizeQuantity || 0) +
        (sizesData.ggSizeQuantity || 0) +
        (sizesData.mSizeQuantity || 0) +
        (sizesData.pSizeQuantity || 0);

    // ensuring pack value isn't 0
    useEffect(() => {
        if (packValue === 0){
            setDisplay('none');
        } else {
            setDisplay('flex')
        }
    }, [packValue]);

    return (
        <Container display={display}>
            {sizesDataArray.map(({ size, quantity }) => {
                return size && quantity !== undefined ? (
                    <QuantityContainer key={size}>
                        <SizeLetter>{size}</SizeLetter>
                        <QuantitySpan>{quantity}</QuantitySpan>
                    </QuantityContainer>
                ) : null;
            })}
            <QuantityContainer>
                <PackSpan>Pack:</PackSpan>
                <QuantitySpan>{packValue}</QuantitySpan>
            </QuantityContainer>
        </Container>
    );
};
export default SizeQuantities;

// styles
const FullScreenWidth = Dimensions.get('window').width

const Container = styled.View<{ display: 'flex' | 'none' }>`
    display: ${(props: any) => props.display};

    flex-direction: row;
    justify-content: space-evenly;

    position: absolute;
    bottom: 0;
    padding: 12px 12px 20px 12px;
    width: ${ () => FullScreenWidth }px;

    background-color: ${ () => Colors.blueGray };
`;

const QuantityContainer = styled.View`
    align-items: flex-end;
    background-color: ${()=> Colors.blueGray};
`;

const SizeLetter = styled.Text`
    background-color: ${()=> Colors.blueGray};
    position: relative;
    z-index: 2;
    color: ${()=> Colors.white};
    font-weight: bold;
    width: 24px;
    height: 24px;
    text-align: center;
    border-radius: 900px;
    margin-right: -10px;
    margin-bottom: -10px;

    border-width: 1px;
    border-style: solid;
    border-color: ${()=> Colors.white};
`;
const PackSpan = styled.Text`
    margin-top: -6px;
    color: ${()=> Colors.white};
    align-self: center;
`
const QuantitySpan = styled.Text`
    color: ${()=> Colors.blueGray};
    background-color: ${()=> Colors.white};
    padding: 5px 15px;
    border-radius: 5px;
`;