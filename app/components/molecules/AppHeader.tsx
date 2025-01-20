import styled from "styled-components/native";

import ReturnButton from "../atoms/ReturnButton";
import CateogrySwitchButton from "../atoms/CategorySwitchButton";
import CategoryTitleDisplay from "../atoms/CategoryTitleDisplay";
import OptionsButton from "../atoms/OptionsButton";

import Colors from "@/app/constants/Colors";

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
            <ReturnButton/>
            <CategoryCarouselContainer>
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
            </CategoryCarouselContainer>
            <OptionsButton/>
        </AppHeaderContainer>
    );
};
export default AppHeader;

const AppHeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px 20px;
    background-color: ${() => Colors.blueGray};
`;
const CategoryCarouselContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 13px;
`;