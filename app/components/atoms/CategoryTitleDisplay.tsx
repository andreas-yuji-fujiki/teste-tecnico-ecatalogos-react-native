import styled from "styled-components/native";

import { CategoryTitleProps } from "@/types/CategoryTitleProps";

import Colors from "@/app/constants/Colors";

const CategoryTitleDisplay = ( { quantity, name } : CategoryTitleProps ) => {
    return (
        <TitleWrapper>
            <QuantityWrapper>
                ({ quantity })
            </QuantityWrapper>
            <NameWrapper>
                { name }
            </NameWrapper>
        </TitleWrapper>  
    );
};
export default CategoryTitleDisplay;

const TitleWrapper = styled.View`
    background-color: ${()=> Colors.white};
    border-radius: 5px;
    padding: 3px 5px;
    flex-direction: row;
    gap: 5px;
`;
const QuantityWrapper = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${ () => Colors.blueGray};
`;
const NameWrapper = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${ () => Colors.blueGray};
`;