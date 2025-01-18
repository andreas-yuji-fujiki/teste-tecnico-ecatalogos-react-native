import styled from "styled-components/native";
import { GestureResponderEvent } from "react-native";

import SearchButtonIcon from '../../../assets/images/icons/search-button-icon.svg'

interface SearchButtonProps {
    onPress: (event?: GestureResponderEvent) => void;
};

const SearchButton = ( onPress : SearchButtonProps ) => {
    return (
        <ButtonWrapper onPress={onPress}>
            <ButtonIcon source={SearchButtonIcon} />
        </ButtonWrapper>
    );
};
export default SearchButton;

const ButtonWrapper = styled.TouchableOpacity``;
const ButtonIcon = styled.Image``;