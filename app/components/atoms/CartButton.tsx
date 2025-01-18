import styled from "styled-components/native";

import CartButtonIcon from '../../../assets/images/icons/cart-button-icon.svg'

const CartButton = () => {
    return (
        <ButtonWrapper>
            <ButtonIcon source={CartButtonIcon} />
        </ButtonWrapper>
    );
};
export default CartButton;

const ButtonWrapper = styled.TouchableOpacity``;
const ButtonIcon = styled.Image``;