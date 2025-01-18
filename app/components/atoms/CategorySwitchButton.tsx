import styled from "styled-components/native";
import { GestureResponderEvent } from 'react-native';

import Colors from "@/app/constants/Colors";
import CategoriesSwitchButtonIcon from '../../../assets/images/icons/categories-switch-button-icon.svg'

interface SwitchButtonProps {
    direction: 'left' | 'right';
    onPress: (event?: GestureResponderEvent) => void;
}

const CateogrySwitchButton = ( { direction, onPress } : SwitchButtonProps ) => {
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