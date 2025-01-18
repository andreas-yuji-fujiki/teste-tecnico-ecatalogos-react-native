import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";

import RemoveButtonIcon from '../../../assets/images/icons/minus-button-icon.svg'

interface RemoveButtonProps {
    onPress: (event?: GestureResponderEvent) => void;
}

const RemoveButton = ( { onPress } : RemoveButtonProps ) => {
    return (
        <ButtonWrapper onPress={ onPress }>
            <ButtonIcon source={RemoveButtonIcon} />
        </ButtonWrapper>
    );
};
export default RemoveButton;

const ButtonWrapper = styled.View``;
const ButtonIcon = styled.Image``;