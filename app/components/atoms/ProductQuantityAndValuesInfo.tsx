import styled from "styled-components/native";

import RemoveButton from "./RemoveButton";
import AddButton from "./AddButton";

import Colors from "@/app/constants/Colors";

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

const QuantityAndPriceContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 19px;
    padding: 10px 0;
`;

const QuantityManagementContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;
const QuantitySpan = styled.Text`
    border-width: 1px;
    border-style: solid;
    border-color: ${ () => Colors.blueGray };

    padding: 5px;
`;

const CurrentValueContainer = styled.View`
    align-items: center;
`;
const CurrentValueTitle = styled.Text`
    font-weight: bold;
`;
const CurrentValueSpan = styled.Text``;

const TotalAcumulatedContainer = styled.View`
    align-items: center;
`;
const TotalAcumulatedTitle = styled.Text`
    font-weight: bold;
`;
const TotalAcumulatedValue = styled.Text``;
