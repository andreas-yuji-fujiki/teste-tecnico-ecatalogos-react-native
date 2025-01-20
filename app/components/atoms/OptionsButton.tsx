import styled from 'styled-components/native';

import Colors from '@/app/constants/Colors';

export default function OptionsButton() {
  return (
    <OptionsButtonButtonWrapper>
        <ButtonIcon>
          F
        </ButtonIcon>
    </OptionsButtonButtonWrapper>
  );
};

const OptionsButtonButtonWrapper = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    background-color: ${()=> Colors.white};
    border-radius: 900px;
    width: 25px;
    height: 25px;
`;
const ButtonIcon = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${()=> Colors.blueGray};
`;