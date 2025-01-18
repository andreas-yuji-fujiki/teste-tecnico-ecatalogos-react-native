import styled from 'styled-components/native';
import { Image } from 'react-native';

import Colors from '@/app/constants/Colors';
import ReturnButtonIcon from '../../../assets/images/icons/return-button-icon.svg';

export default function ReturnButton() {
  return (
    <ReturnButtonWrapper>
        <Image source={ReturnButtonIcon} />
    </ReturnButtonWrapper>
  );
};

const ReturnButtonWrapper = styled.TouchableOpacity`
    background-color: ${( Colors.blueGray )};
`;