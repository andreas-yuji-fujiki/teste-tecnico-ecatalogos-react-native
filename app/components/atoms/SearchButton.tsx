import styled from "styled-components/native";

import SearchButtonIcon from '../../../assets/images/icons/search-button-icon.svg'

import { SearchButtonProps } from "@/types/SearchButtonProps";

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