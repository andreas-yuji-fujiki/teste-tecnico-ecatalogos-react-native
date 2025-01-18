import styled from "styled-components/native";

import RemoveButton from "./RemoveButton";
import AddButton from "./AddButton";

import { QuantityAndPriceProps } from "@/types/QuantityAndPriceProps";

const ProductQuantityAndValuesInfo = ( { 
    current, 
    acumulated, 
    onAdd, 
    onRemove,
    quantity
} : QuantityAndPriceProps ) => {
    return (
        <QuantityAndPriceContainer>
            {/* current */}
            <CurrentValueContainer>
                <CurrentValueTitle>
                    Atual:
                </CurrentValueTitle>
                <CurrentValueSpan>
                    { current }
                </CurrentValueSpan>
            </CurrentValueContainer>

            {/* quantity */}
            <QuantityManagementContainer>
                <RemoveButton onPress={onRemove}/>

                <QuantitySpan>
                    { quantity }
                </QuantitySpan>

                <AddButton onPress={onAdd}/>
            </QuantityManagementContainer>

            {/* acumulated */}
            <TotalAcumulatedContainer>
                <TotalAcumulatedTitle>
                    Acumulado:
                </TotalAcumulatedTitle>
                <TotalAcumulatedValue>
                    { acumulated }
                </TotalAcumulatedValue>
            </TotalAcumulatedContainer>
        </QuantityAndPriceContainer>  
    );
};
export default ProductQuantityAndValuesInfo;

const QuantityAndPriceContainer = styled.View``;

const QuantityManagementContainer = styled.View``;
const QuantitySpan = styled.Text``;

const CurrentValueContainer = styled.View``;
const CurrentValueTitle = styled.Text``;
const CurrentValueSpan = styled.Text``;

const TotalAcumulatedContainer = styled.View``;
const TotalAcumulatedTitle = styled.Text``;
const TotalAcumulatedValue = styled.Text``;
