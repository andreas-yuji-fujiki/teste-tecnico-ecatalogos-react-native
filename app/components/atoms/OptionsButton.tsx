import styled from 'styled-components/native';
import { Image } from 'react-native';

import Colors from '@/app/constants/Colors';
import OptionsButtonIcon from '../../../assets/images/icons/options-button-icon.svg';

export default function OptionsButton() {
  return (
    <OptionsButtonButtonWrapper>
        <Image source={OptionsButtonIcon} />
    </OptionsButtonButtonWrapper>
  );
};

const OptionsButtonButtonWrapper = styled.TouchableOpacity`
    background-color: ${( Colors.blueGray )};
`;