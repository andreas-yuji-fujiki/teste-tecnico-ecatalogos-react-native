// imports
import styled from "styled-components/native";
import { useState, useEffect } from "react";

import CloseButtonIcon from '../../../assets/images/icons/close-button-icon.png'
import Colors from "@/app/constants/Colors";

// types
import { SearchCardProps } from "@/types/SearchCardProps";

// component
const SearchCard = ({ 
    display, 
    searchInputValue, 
    onSearchInputChange, 
    error, 
    onSubmitSearch,
    onClose
}: SearchCardProps) => {
    // visibility state
    const [displayClass, setDisplayClass] = useState<"none" | "flex">("none");

    // updates visibility when 'display' changes
    useEffect(() => {
        setDisplayClass(display === "hidden" ? "none" : "flex");
    }, [display]);

    // display styles
    const containerStyle = {
        display: displayClass,
    };

    return (
        <SearchCardContainer style={containerStyle}>
            <CloseButton onPress={onClose}>
                <ButtonIcon source={CloseButtonIcon} />
            </CloseButton>
            <Header>
                <HeaderTitle>
                    Informações:
                </HeaderTitle>
            </Header>
            <FormContainer>
                <SearchInputContainer>
                    <SearchInput
                        keyboardType='numeric'
                        maxLength={10}
                        placeholder="00.00.0000"
                        value={searchInputValue}
                        onChangeText={onSearchInputChange}
                    />
                    <InputErrorMessage>
                        { error != '' ? error : ''}
                    </InputErrorMessage>
                </SearchInputContainer>

                {/* send search button */}
                <ConfirmSearchButton onPress={onSubmitSearch}>
                    <ConfirmSearchButtonText>
                        Buscar
                    </ConfirmSearchButtonText>
                </ConfirmSearchButton>
            </FormContainer>
        </SearchCardContainer>
    );
};
export default SearchCard;

// styled components
const SearchCardContainer = styled.View``;
const FormContainer = styled.View``;

const Header = styled.View``;
const HeaderTitle = styled.Text``;

const SearchInputContainer = styled.View``;
const SearchInput = styled.TextInput``;
const ConfirmSearchButton = styled.TouchableOpacity``;
const ConfirmSearchButtonText = styled.Text``;

const InputErrorMessage = styled.Text`
    color: ${( Colors.redError )};
`;

const CloseButton = styled.TouchableOpacity``;
const ButtonIcon = styled.Image``;
