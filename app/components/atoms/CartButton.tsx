import styled from "styled-components/native";

import { Image } from "react-native";

import CartButtonIcon from '../../../assets/images/icons/cart-button-icon.svg'

const CartButton = () => {
    return(
        <ButtonWrapper>
            <Image source={CartButtonIcon} />
        </ButtonWrapper>
    );
};
export default CartButton;

const ButtonWrapper = styled.TouchableOpacity``;