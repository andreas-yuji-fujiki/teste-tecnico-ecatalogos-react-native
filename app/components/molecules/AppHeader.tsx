import styled from "styled-components/native";

import CateogrySwitchButton from "../atoms/CategorySwitchButton";
import CategoryTitleDisplay from "../atoms/CategoryTitleDisplay";

interface AppHeaderProps {
    onPrevCategory: Function;
    onNextCategory: Function;
    categoryItemsQuantity: number; 
    categoryName: string;
}

const AppHeader = ( { 
    onPrevCategory, 
    onNextCategory, 
    categoryItemsQuantity, 
    categoryName
} : AppHeaderProps) => {
    return(
        <AppHeaderContainer>
            <CateogrySwitchButton
                direction="left"
                onPress={onPrevCategory}
            />
            <CategoryTitleDisplay
                quantity={categoryItemsQuantity} name={categoryName}
            />
            <CateogrySwitchButton
                direction="right"
                onPress={onNextCategory}
            />
        </AppHeaderContainer>
    );
};
export default AppHeader;

const AppHeaderContainer = styled.View``