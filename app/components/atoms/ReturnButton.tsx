import styled from 'styled-components/native';
import { Image } from 'react-native';

import Colors from '@/app/constants/Colors';
import ReturnButtonIcon from '../../../assets/images/icons/return-button-icon.png';

export default function ReturnButton() {
  return (
    <ReturnButtonWrapper>
        <ButtonIcon source={ReturnButtonIcon} />
    </ReturnButtonWrapper>
  );
};

const ReturnButtonWrapper = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    background-color: ${() => Colors.blueGray};
`;
const ButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
`;