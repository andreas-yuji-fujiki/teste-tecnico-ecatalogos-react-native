export interface CategorySwitchButtonProps {
    direction: 'left' | 'right';
    onPress: (event?: GestureResponderEvent) => void;
}