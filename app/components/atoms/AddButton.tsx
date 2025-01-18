import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";

import AddButtonIcon from '../../../assets/images/icons/plus-button-icon.svg'

interface AddButtonProps {
    onPress: (event?: GestureResponderEvent) => void;
}

const AddButton = ( { onPress } : AddButtonProps ) => {
    return (
        <ButtonWrapper onPress={ onPress }>
            <ButtonIcon source={AddButtonIcon} />
        </ButtonWrapper>
    );
};
export default AddButton;

const ButtonWrapper = styled.View``;
const ButtonIcon = styled.Image``;