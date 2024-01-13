import { useEffect, useState } from "react";
import daysjs from 'dayjs';

export function useDebounce(value: any, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export function formatTimeString(dateTimeString: string | daysjs.Dayjs): string | daysjs.Dayjs {
    const dateString = dateTimeString.toString();
    const dateTime = new Date(dateString);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const period = hours < 12 ? 'AM' : 'PM';
    return `${formattedHours}:${formattedMinutes} ${period}`;
}



