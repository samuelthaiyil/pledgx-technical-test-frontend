type FormFieldProps = {
    label: string;
}

export const FormField = ({ label }: FormFieldProps) => {
    return (
        <div className="space-y-1">
            <p>{label}</p>
            <input className="border-2 border-orange-400 rounded text-xl outline-none py-4 px-8 w-full" type="text"/>
        </div>
    )
}
