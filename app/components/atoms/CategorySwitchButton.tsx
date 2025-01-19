import styled from "styled-components/native";

import Colors from "@/app/constants/Colors";
import CategoriesSwitchButtonIcon from '../../../assets/images/icons/categories-switch-button-icon.png'

import { CategorySwitchButtonProps } from "@/types/CategorySwitchButtonProps";

const CateogrySwitchButton = ( { direction, onPress } : CategorySwitchButtonProps ) => {
    return (
        <SwitchButton onPress={onPress}>
            {direction === 'left' ? 
                <LeftSideIcon source={ CategoriesSwitchButtonIcon } />
            :
                <RightSideIcon source={ CategoriesSwitchButtonIcon } />
            }
        </SwitchButton>
    );
};
export default CateogrySwitchButton;

const SwitchButton = styled.TouchableOpacity`
    background-color: ${( Colors.blueGray )};
`;
const LeftSideIcon = styled.Image`
     transform: rotate(180deg);
`;
const RightSideIcon = styled.Image`
   transform: rotate(0deg);
`;