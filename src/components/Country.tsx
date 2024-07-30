type CountryProps = {
    onSelect: () => any;
    isSelected: boolean;
    name: string;
    imageSrc: string;
}

export const Country = ({ onSelect, isSelected, name, imageSrc }: CountryProps) => (
        <div
            className={`${isSelected ? 'bg-orange-100 border-orange-300' : 'hover:bg-orange-100 hover:border-orange-300'} inline-block p-5 space-y-2 border-2 cursor-pointer rounded`}
            onClick={onSelect}
        >
            <img src={imageSrc} alt={`Photo of ${name}'s flag.`}/>
            <p className="text-center text-slate-400">{name}</p>
        </div>
    )


