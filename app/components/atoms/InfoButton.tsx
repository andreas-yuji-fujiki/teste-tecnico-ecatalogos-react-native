import styled from "styled-components/native";
import { InfoButtonProps } from "@/types/InfoButtonProps";

import InfoButtonIcon from '../../../assets/images/icons/info-button-icon.png'

const InfoButton = ({ onPress }: InfoButtonProps) => {
    return(
        <ButtonWrapper onPress={onPress}>
            <ButtonIcon source={InfoButtonIcon} resizeMode='cover' />
        </ButtonWrapper>
    );
};

export default InfoButton;

const ButtonWrapper = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;


const ButtonIcon = styled.Image`
    width: 40px;
    height: 40px;
`;