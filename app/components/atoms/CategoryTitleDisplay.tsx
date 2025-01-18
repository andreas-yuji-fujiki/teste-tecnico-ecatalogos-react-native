import styled from "styled-components/native";

const CategoryTitleDisplay = ( { children } : any ) => {
    return (
        <TitleWrapper>
            { children }
        </TitleWrapper>  
    );
};
export default CategoryTitleDisplay;

const TitleWrapper = styled.Text``;