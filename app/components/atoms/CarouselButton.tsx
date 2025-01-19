import styled from "styled-components/native";

import CarouselButtonIcon from '../../../assets/images/icons/carousel-arrow-button-icon.png'

import { CarouselButtonProps } from "@/types/CarouselButtonProps";

const CarouselButton = ( { direction, onPress } : CarouselButtonProps) => {
    return(
        <ButtonWrapper onPress={onPress} >
            { direction === 'left' ? 
                <LeftButtonIcon source={CarouselButtonIcon} />
            :
                <RightButtonIcon source={CarouselButtonIcon} />
            }
        </ButtonWrapper>
    );
};
export default CarouselButton;

const ButtonWrapper = styled.TouchableOpacity``;
const LeftButtonIcon = styled.Image`
    transform: rotate(0deg);
`;
const RightButtonIcon = styled.Image`
    transform: rotate(180deg);
`;