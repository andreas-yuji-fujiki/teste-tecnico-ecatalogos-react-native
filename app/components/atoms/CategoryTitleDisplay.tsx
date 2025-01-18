import styled from "styled-components/native";

import { CategoryTitleProps } from "@/types/CategoryTitleProps";

const CategoryTitleDisplay = ( { quantity, name } : CategoryTitleProps ) => {
    return (
        <TitleWrapper>
            <QuantityWrapper>
                { quantity }
            </QuantityWrapper>
            <NameWrapper>
                { name }
            </NameWrapper>
        </TitleWrapper>  
    );
};
export default CategoryTitleDisplay;

const TitleWrapper = styled.View``;
const QuantityWrapper = styled.Text``;
const NameWrapper = styled.Text``;