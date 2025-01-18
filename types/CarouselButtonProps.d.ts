import { GestureResponderEvent } from "react-native";
export interface CarouselButtonProps {
    direction: 'left' | 'right';
    onPress: (event?: GestureResponderEvent) => void;
}