import React, { useEffect, useRef } from 'react';

import { Animated } from 'react-native';
import styled from 'styled-components/native';

import LoadingIconSvg from '../../../assets/images/loading.png'

const LoadingScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <LoadingScreenContainer>
      <Animated.Image source={LoadingIconSvg} 
        style={{ width: 100, height: 100, transform: [{ rotate: spin }] }} />
    </LoadingScreenContainer>
  );
};
export default LoadingScreen;

const LoadingScreenContainer = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
`;