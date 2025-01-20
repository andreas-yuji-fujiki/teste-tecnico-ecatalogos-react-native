import styled from "styled-components/native";

import CartButtonIcon from '../../../assets/images/icons/cart-button-icon.png'

const CartButton = () => {
    return (
        <ButtonWrapper>
            <ButtonIcon source={CartButtonIcon} />
        </ButtonWrapper>
    );
};
export default CartButton;

const ButtonWrapper = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;
const ButtonIcon = styled.Image`
    width: 40px;
    height: 40px;
`;