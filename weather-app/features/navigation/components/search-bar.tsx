import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import {Command, CommandDialog, CommandEmpty, CommandInput, CommandList} from "@/components/ui/command";

interface SearchBarProps {
    query: string;
    onQueryChange: (query: string) => void;
    open: boolean;
    onChange: () => void;
}

export default function SearchBar({query, onQueryChange, open, onChange}: SearchBarProps) {
    return (
        <>
            <Button
                variant="outline"
                onClick={onChange}
                className="relative w-full justify-start text-xs text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
            >
                <Search className="size-4 mr-2"/>
                Search for cities...
            </Button>

            <CommandDialog open={open} onOpenChange={onChange}>
                <Command>
                    <CommandInput
                        placeholder="Search for city/cities"
                        value={query}
                        onValueChange={onQueryChange}
                    />

                    <CommandList>
                        {query.length > 2 && false && (
                            <CommandEmpty>No city/cities were found.</CommandEmpty>
                        )}


                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    )
};