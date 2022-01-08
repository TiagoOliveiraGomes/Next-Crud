interface propsEntry {
    tipo?: "text" | "number",
    text: string,
    value: any,
    onlyRead?: boolean,
    onChange?: (value: any) => void,
    className: string
}

export default function entry (props : propsEntry) {
    const {tipo="text", text, onlyRead, value, onChange, className} = props
    return(
        <div className={`flex flex-col ${className}`}>
            <label className="mb-2">{text}</label>
            <input type={tipo} value={value} onChange={(event)=> onChange(event.target.value)} className={`
            border border-dusk rounded-lg bg-gray-200
            focus:outline-none px-4 py-2
            ${!onlyRead && "focus:bg-gray-100"}
            `}/>
        </div>
    )
}