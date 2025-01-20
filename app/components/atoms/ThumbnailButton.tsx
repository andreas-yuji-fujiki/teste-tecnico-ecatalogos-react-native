import styled from "styled-components/native";

import { ThumbnailButtonProps } from "@/types/ThumbnailButtonProps";

import Colors from "@/app/constants/Colors";

const ThumbnailButton = ({ image, onThumbnailClick, index }: ThumbnailButtonProps) => {
    return (
        <ThumbnailButtonWrapper onPress={() => onThumbnailClick(image.path)}>
            <ThumbnailImage
                index={index}
                source={{ uri: image.path }}
                resizeMode='contain'
            />
        </ThumbnailButtonWrapper>
    );
};

export default ThumbnailButton;

const ThumbnailButtonWrapper = styled.TouchableOpacity``;
const ThumbnailImage = styled.Image`
    height: 50px;
    width: 55px;
    background-color: ${()=> Colors.white};
`;
