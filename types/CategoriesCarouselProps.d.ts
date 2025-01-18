export interface CategoriesCarouselProps {
    onLeftPress: (event?: GestureResponderEvent) => void;
    onRightPress: (event?: GestureResponderEvent) => void;
    itemsQuantity: string;
    categoryTitle: string;
}