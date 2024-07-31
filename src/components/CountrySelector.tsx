import {Country} from "./Country";
import {useEffect, useState} from "react";

type CountrySelectorProps = {
    onSelect: (name: string) => any;
    selected: string | null
}

const countries = [
    {
        name: "Canada",
        imageSrc: "canada-2 1.svg"
    },
    {
        name: "USA",
        imageSrc: "united-states 1.svg"
    }
]

export const CountrySelector = ({ onSelect, selected }: CountrySelectorProps) => {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const handleCountrySelected = (name: string) => {
        setSelectedCountry(name);
        onSelect(name);
    }
    useEffect(() => {
        setSelectedCountry(selected);
    }, [selected])

    return (
        <>
            <p>Country</p>
            {
                countries.map(({ name, imageSrc }) => {
                    return (
                        <div className="inline" key={name}>
                            <Country
                                onSelect={() => handleCountrySelected(name)}
                                isSelected={(selectedCountry && (selectedCountry === name)) || false}
                                name={name}
                                imageSrc={imageSrc}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}
