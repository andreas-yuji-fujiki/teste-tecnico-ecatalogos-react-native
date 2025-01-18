import { useState } from "react";
import styled from "styled-components/native";

import InfoButton from "./InfoButton";
import InfoCard from "./InfoCard";

import { InfoSetProps } from "@/types/InfoSetProps";

const InfoSet = ( { product } : InfoSetProps ) => {
    // display state
    const [ visibility, setVisibility ] = useState<'hidden' | 'visible'>('hidden');

    // toggle info card
    function toggleInfoVisibility(){
        if (visibility === 'hidden') {
            setVisibility('visible');
        } else {
            setVisibility('hidden');
        };
    };
    
    return(
        <InfoSetContainer>
            <InfoButton onPress={toggleInfoVisibility}/>
            <InfoCard product={product} display={visibility}/>
        </InfoSetContainer>
    );
};
export default InfoSet;

const InfoSetContainer = styled.View``;