import { useEffect, useState } from "react";

function useChange(value, timeOut) {
    const [newValue, setNewValue] = useState(value);
    useEffect(() => {
        const timeOutId = setTimeout(() => setNewValue(value), timeOut);
        return () => clearTimeout(timeOutId);
    }, [value]);
    return newValue;
}

export default useChange;
