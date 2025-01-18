import styled from "styled-components/native";

import InfoButtonIcon from '../../../assets/images/icons/info-button-icon.svg'

import { InfoButtonProps } from "@/types/InfoButtonProps";

const InfoButton = ( onPress : InfoButtonProps ) => {
    return(
        <ButtonWrapper onPress={onPress}>
            <ButtonIcon source={InfoButtonIcon} />
        </ButtonWrapper>
    );
};
export default InfoButton;

const ButtonWrapper = styled.TouchableOpacity``;
const ButtonIcon = styled.Image``;