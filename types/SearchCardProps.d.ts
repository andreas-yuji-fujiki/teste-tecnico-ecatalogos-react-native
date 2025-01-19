import { GestureResponderEvent } from "react-native";
export interface SearchCardProps {
    display: string;
    searchInputValue: string;
    error?: string;
    onSubmitSearch: (event?: GestureResponderEvent) => void;
    onClose: Function;
    onSearchInputChange: Function;
}