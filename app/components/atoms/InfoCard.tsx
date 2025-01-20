// imports
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import CloseButtonIcon from '../../../assets/images/icons/close-button-icon.png'

import Colors from "@/app/constants/Colors";

// types
import { InfoCardProps } from "@/types/InfoCardProps";

// component
const InfoCard = ({ product, display, onClose }: InfoCardProps) => {
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
        <InfoCardContainer style={containerStyle}>
            <CloseButton onPress={onClose}>
                <ButtonIcon source={CloseButtonIcon} />
            </CloseButton>
            <Header>
                <HeaderTitle>
                    Informações:
                </HeaderTitle>
            </Header>
            <InfoContainer>
                <InfoText>
                    <InfoTitle>Nome do produto:</InfoTitle> {product.name}
                </InfoText>
                <InfoText>
                    <InfoTitle>Referência:</InfoTitle> {product.reference}
                </InfoText>
                <InfoText>
                    <InfoTitle>Marca:</InfoTitle> {product.brand}
                </InfoText>
                <InfoText>
                    <InfoTitle>Categoria:</InfoTitle> {product.category}
                </InfoText>
                <InfoText>
                    <InfoTitle>Gênero:</InfoTitle> {product.gender}
                </InfoText>
            </InfoContainer>
        </InfoCardContainer>
    );
};
export default InfoCard;

// styled components
const InfoCardContainer = styled.View`
    position: absolute;
    z-index: 200;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 200px;
    height: 165px;
    gap: 15px;

    border-width: 1px;
    border-style: solid;
    border-color: #000;
`;

const Header = styled.View`
    padding: 5px 0;
    justify-content: center;
    align-items: center;
    background-color: ${()=> Colors.blueGray};
`;

const HeaderTitle = styled.Text`
    color: #fff;
    font-weight: bold;
`;

const InfoContainer = styled.View`
    margin: 0 auto;
    width: 180px;
`;

const InfoTitle = styled.Text`
    font-weight: bold;
`;
const InfoText = styled.Text``;

const CloseButton = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    z-index: 300;
`;

const ButtonIcon = styled.Image``;
