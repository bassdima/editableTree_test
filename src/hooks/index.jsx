import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import { useMediaQuery } from 'react-responsive';

export const useUserId = () => {
    const [userId, setUserId] = useState("");
    const UUID = uuid();
    const savedUserId = localStorage.getItem('UUID');

    useEffect(() => {
        if (!savedUserId) localStorage.setItem('UUID', UUID);
        setUserId(savedUserId);
    }, [UUID, savedUserId]);

    return userId;
}

export const useResponsive = () => {
    const isTablet = useMediaQuery({ query: '(min-width: 726px)' });

    return isTablet;
}
