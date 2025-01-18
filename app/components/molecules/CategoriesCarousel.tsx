import styled from 'styled-components/native';

import CateogrySwitchButton from '../atoms/CategorySwitchButton';
import CategoryTitleDisplay from '../atoms/CategoryTitleDisplay';

import { CategoriesCarouselProps } from '@/types/CategoriesCarouselProps';

const CategoriesCarousel = ( { 
    onLeftPress, 
    onRightPress, 
    itemsQuantity, 
    categoryTitle
} : CategoriesCarouselProps ) => {
  return (
    <CategoriesCarouselWrapper>
        <CateogrySwitchButton direction='left' onPress={onLeftPress} />

        <CategoryTitleDisplay 
          quantity={itemsQuantity} 
          name={categoryTitle} 
        />

        <CateogrySwitchButton direction='right' onPress={onRightPress} />
    </CategoriesCarouselWrapper>
  );
};
export default CategoriesCarousel;

const CategoriesCarouselWrapper = styled.View`

`