import { useFonts } from 'expo-font';

import MainScreen from './components/(screens)/MainScreen';
import LoadingScreen from "./components/(screens)/LoadingScreen";

const Index = () => {
  // loading fonts
  const [ fontsLoaded ] = useFonts ({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
  })
  if ( !fontsLoaded ) return <LoadingScreen />

  // index
  return (
      <MainScreen />
  )
}
export default Index;