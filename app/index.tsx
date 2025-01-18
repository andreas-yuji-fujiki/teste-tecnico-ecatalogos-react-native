import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

import LoadingScreen from "./components/(screens)/LoadingScreen";

export default function Index() {
  // loading fonts
  const [ fontsLoaded ] = useFonts ({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
  })
  if ( !fontsLoaded ) return <LoadingScreen />

  // index
  return (
      <IndexWrapper>
      </IndexWrapper>
  )
}

const IndexWrapper = styled.View``
