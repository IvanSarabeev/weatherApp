"use client";

import {useState} from "react";
import SearchBar from "@/features/navigation/components/search-bar";
import {useToggle} from "@/hooks/useToggle";

export default function CitySearch() {
    const {open, onChange} = useToggle();

    const [query, setQuery] = useState<string>("");

    // TODO: Pass the use

    return (
        <SearchBar
            query={query}
            onQueryChange={setQuery}
            open={open}
            onChange={onChange}
        />
    )
}