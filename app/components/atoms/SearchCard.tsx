// imports
import styled from "styled-components/native";
import { useState, useEffect } from "react";

import CloseButtonIcon from '../../../assets/images/icons/close-button-icon.svg'
import Colors from "@/app/constants/Colors";

// types
import { SearchCardProps } from "@/types/SearchCardProps";

// component
const SearchCard = ({ display, searchInputValue, error, onSubmitSearch }: SearchCardProps) => {
    // visibility state
    const [displayClass, setDisplayClass] = useState<"none" | "flex">("none");

    // updates visibility when 'display' changes
    useEffect(() => {
        setDisplayClass(display === "hidden" ? "none" : "flex");
    }, [display]);

    // close button handling
    function handleClose() {
        setDisplayClass('none');
    }

    // display styles
    const containerStyle = {
        display: displayClass,
    };

    return (
        <SearchCardContainer style={containerStyle}>
            <CloseButton onPress={handleClose}>
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
                        autoFocus={true}
                        keyboardType='numeric'
                        maxLength={8}
                        placeholder="00.00.0000"
                        value={searchInputValue}
                    />
                    <InputErrorMessage>
                        { error != '' ? error : ''}
                    </InputErrorMessage>
                </SearchInputContainer>

                {/* send search button */}
                <ConfirmSearchButton onPress={onSubmitSearch}>
                    Buscar
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
const InputErrorMessage = styled.Text`
    color: ${( Colors.redError )};
`;

const CloseButton = styled.TouchableOpacity``;
const ButtonIcon = styled.Image``;
