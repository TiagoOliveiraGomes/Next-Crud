interface ButtonProps {
    children: any
    color?: "green" | "red" | "gray"| "teal",
    classname?: string,
    onClick?: () => void
}
export default function Button(props: ButtonProps) {
    // const {color="gray", classname, children} = props
    const color = props.color || "gray"
    const {classname, children, onClick} = props
    return(
        <button onClick={onClick} className={`
        bg-gradient-to-r from-${color}-700 ${color==="red" ? "to-scarlet" :"to-dusk"}
        text-white px-4 py-2 rounded-md
        ${classname}
        `}>
            {children}
        </button>
    )
}