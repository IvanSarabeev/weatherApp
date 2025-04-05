import {useState} from "react";

/**
 * Toggle different Modal States
 */
export const useToggle = () => {
    const [open, setOpen] = useState<boolean>(false);

    const onChange = () => {
        setOpen((prevState) => !prevState);
    }

    return {open, onChange};
};