import styled from "styled-components/native";

import RemoveButtonIcon from '../../../assets/images/icons/minus-button-icon.png'

import { RemoveButtonProps } from "@/types/RemoveButtonProps";

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