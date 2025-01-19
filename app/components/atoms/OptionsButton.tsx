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
    background-color: ${( Colors.blueGray )};
`;
const ButtonIcon = styled.Text``;