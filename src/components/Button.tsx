
interface ButtonProps {
    children: any
    color?: "green" | "blue" | "gray" | "red",
    classname?: string
}
export default function Button(props: ButtonProps) {
    // const {color="gray", classname, children} = props
    const color = props.color || "gray"
    console.log("Cor é: ", color)
    const {classname, children} = props
    return(
        <button className={`
        bg-gradient-to-r from-${color || "gray"}-400 to-${color || "gray"}-700
        text-white px-4 py-2 rounded-md
        ${classname}
        `}>
            {color}
        </button>
    )
}