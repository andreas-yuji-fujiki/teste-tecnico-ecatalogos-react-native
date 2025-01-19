import styled from "styled-components/native";

import { ThumbnailButtonProps } from "@/types/ThumbnailButtonProps";

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
    height: 55px;
    width: 55px;
    margin: 5px;
`;
