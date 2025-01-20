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
                    Buscar por REF
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
const SearchCardContainer = styled.View`
    gap: 10px;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: #000;
    width: 200px;
    height: 165px;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
`;
const FormContainer = styled.View`
    gap: 5px;
`;

const Header = styled.View`
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    background-color: ${()=>Colors.blueGray};
`;
const HeaderTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;

const SearchInputContainer = styled.View`
    background-color: red;
    width: 180px;
    margin: 0 auto;
    background-color: #eaeaea;
`;
const SearchInput = styled.TextInput``;
const ConfirmSearchButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: ${()=> Colors.blueGray};
    margin: 0 auto;
    border-radius: 5px;
    width: 180px;
    padding: 10px 0;
`;
const ConfirmSearchButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;

const InputErrorMessage = styled.Text`
    color: ${( Colors.redError )};
`;

const CloseButton = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    z-index: 200;
`;
const ButtonIcon = styled.Image``;
