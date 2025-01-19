import { GestureResponderEvent } from "react-native";
export interface SearchCardProps {
    display: "hidden" | "visible";
    searchInputValue: string;
    error?: string;
    onSubmitSearch: (event?: GestureResponderEvent) => void;
    onClose: function;
}