import styled from "styled-components/native";

import AddButtonIcon from '../../../assets/images/icons/plus-button-icon.png'

import { AddButtonProps } from "@/types/AddButtonProps";

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