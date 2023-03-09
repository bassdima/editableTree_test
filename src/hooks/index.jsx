import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

export const useUserId = () => {
    const [userId, setUserId] = useState();
    const UUID = uuid();
    const savedUserId = JSON.parse(localStorage.getItem('UUID'));

    useEffect(() => {
        if (localStorage.getItem('UUID') === null || localStorage.getItem('UUID') === undefined) {
            localStorage.setItem('UUID', JSON.stringify(UUID));
            setUserId(savedUserId);
        }
        else {
            setUserId(savedUserId);
        }
    }, [UUID, savedUserId]);

    return userId;
}
