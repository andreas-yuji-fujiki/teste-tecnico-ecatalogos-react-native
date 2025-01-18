// imports
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import CloseButtonIcon from '../../../assets/images/icons/close-button-icon.svg'

// types
import { Product as ProductType } from '../../../types/ProductTypes';
interface InfoCardProps {
    product: ProductType;
    display: "hidden" | "visible";
    onClose: () => void;
}

// component
const InfoCard = ({ product, display, onClose }: InfoCardProps) => {
    // visibility state
    const [displayClass, setDisplayClass] = useState<"none" | "flex">("none");

    // updates visibility when 'display' changes
    useEffect(() => {
        setDisplayClass(display === "hidden" ? "none" : "flex");
    }, [display]);

    // close button handling
    function handleClose() {
        setDisplayClass('none');
        onClose();
    }

    // display styles
    const containerStyle = {
        display: displayClass,
    };

    return (
        <InfoCardContainer style={containerStyle}>
            <CloseButton onPress={handleClose}>
                <ButtonIcon source={CloseButtonIcon} />
            </CloseButton>
            <Header>
                <HeaderTitle>
                    Informações:
                </HeaderTitle>
            </Header>
            <InfoContainer>
                <InfoText>
                    Nome do produto: {product.name}
                </InfoText>
                <InfoText>
                    Referência: {product.reference}
                </InfoText>
                <InfoText>
                    Marca: {product.brand}
                </InfoText>
                <InfoText>
                    Categoria: {product.category}
                </InfoText>
                <InfoText>
                    Gênero: {product.gender}
                </InfoText>
            </InfoContainer>
        </InfoCardContainer>
    );
};
export default InfoCard;

// styled components
const InfoCardContainer = styled.View``;

const Header = styled.View``;

const HeaderTitle = styled.Text``;

const InfoContainer = styled.View``;

const InfoText = styled.Text``;

const CloseButton = styled.TouchableOpacity``;

const ButtonIcon = styled.Image``;
