import styled from "styled-components/native";

import SearchButton from "./SearchButton";
import SearchCard from "./SearchCard";
import { useState } from "react";

import { SearchSetProps } from "@/types/SearchSetProps";

const SearchSet = ( { searchInputValue, onSearchInputChange, error, onSubmitSearch } : SearchSetProps) => {
    // visibility state
    const [ visibility, setVisibility ] = useState<'hidden' | 'visible'>('hidden')
    
    // toggle search card
    function handleVisibility(){
        if(visibility === 'hidden'){
            setVisibility('visible')
        } else {
            setVisibility('hidden')
        }
    }

    return (
        <SearchSetContainer>
            <SearchButton onPress={handleVisibility}/>
            <SearchCard 
                display={visibility} 
                searchInputValue={searchInputValue}
                onSearchInputChange={onSearchInputChange} 
                error={error} 
                onSubmitSearch={onSubmitSearch} 
                onClose={handleVisibility}
            />
        </SearchSetContainer>
    );
};
export default SearchSet;

const SearchSetContainer = styled.View``;