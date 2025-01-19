import { useState } from 'react';

function useSearchCardVisibility() {
    const [isVisible, setIsVisible] = useState<'flex' | 'none'>('flex');

    const hideSearchCard = () => {
        setIsVisible('none');
    };

    const showSearchCard = () => {
        setIsVisible('flex');
    };

    return {
        isVisible,
        hideSearchCard,
        showSearchCard
    };
}
export default useSearchCardVisibility;
