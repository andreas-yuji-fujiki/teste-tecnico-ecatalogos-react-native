import { GestureResponderEvent } from "react-native";
export interface QuantityAndPriceProps {
    current: number;
    acumulated: number;
    quantity: number;
    onAdd: (event?: GestureResponderEvent) => void;
    onRemove: (event?: GestureResponderEvent) => void;
}