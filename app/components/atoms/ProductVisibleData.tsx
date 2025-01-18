import styled from "styled-components/native";
import { Product as ProductData } from '../../../types/ProductTypes'

interface VisibleDataProps {
    product: ProductData;
}

const ProductVisibleData = ( { product } : VisibleDataProps ) => {
    return (
        <DataContainer>
            <DataText>
                { product.name }
            </DataText>
            <DataText>
                REF: { product.reference }
            </DataText>
            <DataText>
                R$ { product.price }
            </DataText>
        </DataContainer>
    );
};
export default ProductVisibleData;

const DataContainer = styled.View``;
const DataText = styled.Text``;