import styled from "styled-components/native";
import ProductSlider from "../organisms/ProductsSlider";

const MainScreen = () => {
    return (
        <MainScreenContainer>
            <ProductSlider />
        </MainScreenContainer>
    );
};
export default MainScreen;

const MainScreenContainer = styled.View``;