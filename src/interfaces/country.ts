export interface Country{
    name: string;
    code: string;
    flag: string;
}

export interface CountriesProps {
    onSelect: (country: string) => void;
}