import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { VisibleDataProps } from "@/types/VisibleDataProps";

import Colors from "@/app/constants/Colors";

const ProductVisibleData = ( { product } : VisibleDataProps ) => {
    return (
        <DataContainer>
            <DataText>
                <BoldSpan>
                    { product.name }
                </BoldSpan>
            </DataText>
            <DataText>
                <BoldSpan>REF:</BoldSpan> { product.reference }
            </DataText>
            <DataText>
                <BoldSpan>R$</BoldSpan> { product.price }
            </DataText>
        </DataContainer>
    );
};
export default ProductVisibleData;

const FullScreenHeight = Dimensions.get('window').height
const DataContainer = styled.View`
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${ () => Colors.priceColor};

    flex-direction: row;
    gap: 20px;
    justify-content: center;
    padding: 8px 0;

    width: ${() => FullScreenHeight / 2.3}px;
    margin: 0 auto;
`;
const BoldSpan = styled.Text`
    font-weight: 500;
`;
const DataText = styled.Text``;