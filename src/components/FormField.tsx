type FormFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export const FormField = ({ label, value, onChange }: FormFieldProps) => {
    const handleChange = (event: any) => {
        onChange(event.target.value);
    };

    return (
        <div className="space-y-1">
            <p>{label}</p>
            <input className="border-2 border-orange-400 rounded text-xl outline-none py-4 px-8 w-full" type="text" value={value} onChange={handleChange}/>
        </div>
    )
}
