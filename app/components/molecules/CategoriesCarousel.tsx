import { GestureResponderEvent } from 'react-native'
import styled from 'styled-components/native';

import CateogrySwitchButton from '../atoms/CategorySwitchButton';
import CategoryTitleDisplay from '../atoms/CategoryTitleDisplay';

interface CategoriesCarouselProps {
    onLeftPress: (event?: GestureResponderEvent) => void;
    onRightPress: (event?: GestureResponderEvent) => void;
    itemsQuantity: string;
    categoryTitle: string;
}

const CategoriesCarousel = ( { 
    onLeftPress, 
    onRightPress, 
    itemsQuantity, 
    categoryTitle
} : CategoriesCarouselProps ) => {
  return (
    <CategoriesCarouselWrapper>
        <CateogrySwitchButton direction='left' onPress={onLeftPress}/>
        
        <CategoryTitleDisplay quantity={itemsQuantity} name={categoryTitle}/>

        <CateogrySwitchButton direction='right' onPress={onRightPress}/>
    </CategoriesCarouselWrapper>
  );
};
export default CategoriesCarousel;

const CategoriesCarouselWrapper = styled.View`

`