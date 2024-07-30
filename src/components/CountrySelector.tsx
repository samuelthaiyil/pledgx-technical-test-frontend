import {Country} from "./Country";
import {useState} from "react";

type CountrySelectorProps = {
    onSelect: (name: string, imageSrc: string) => any;
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

export const CountrySelector = ({ onSelect }: CountrySelectorProps) => {
    const [selectedCountry, setSelectedCountry] = useState<{ name: string; imageSrc: string} | null>(null);
    const handleCountrySelected = (name: string, imageSrc: string) => {
        setSelectedCountry({ name, imageSrc });
        onSelect(name, imageSrc);
    }
    return (
        <>
            <p>Country</p>
            {
                countries.map(({ name, imageSrc }) => {
                    return (
                        <div className="inline" key={name}>
                            <Country
                                onSelect={() => handleCountrySelected(name, imageSrc)}
                                isSelected={(selectedCountry && (selectedCountry.name === name)) || false}
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
