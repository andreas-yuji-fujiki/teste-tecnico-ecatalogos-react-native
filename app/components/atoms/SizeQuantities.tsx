import styled from "styled-components/native";

import { Product as ProductType } from '../../../types/ProductTypes'
interface SizeQuantitiesProps {
    product: ProductType;
}

const SizeQuantities = ( { product } : SizeQuantitiesProps ) => {
    return (
        <Container>
            { product.skus.map((sku) => {
                return (
                    <QuantityContainer key={sku.id}>
                        <SizeLetter>
                            { sku.size }
                        </SizeLetter>
                        <QuantitySpan>
                            { sku.min_quantity }
                        </QuantitySpan>
                    </QuantityContainer>
                );
            })}
        </Container>
    );
};
export default SizeQuantities;

const Container = styled.View``;

const QuantityContainer = styled.View``;
const SizeLetter = styled.Text``;
const QuantitySpan = styled.Text``;