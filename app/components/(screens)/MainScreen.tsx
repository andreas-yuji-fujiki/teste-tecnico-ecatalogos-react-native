import styled from "styled-components/native";
import ProductSlider from "../templates/ProductsSlider";

const MainScreen = () => {
    return (
        <MainScreenContainer>
            <ProductSlider />
        </MainScreenContainer>
    );
};
export default MainScreen;

const MainScreenContainer = styled.View``;