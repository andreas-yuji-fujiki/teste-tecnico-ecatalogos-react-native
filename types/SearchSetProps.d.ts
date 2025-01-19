import { GestureResponderEvent } from "react-native";
export interface SearchSetProps {
    searchInputValue: string;
    error?: string;
    onSubmitSearch: (event?: GestureResponderEvent) => void;
    onSearchInputChange: Function;
}