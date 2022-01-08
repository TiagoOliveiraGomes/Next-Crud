interface ButtonProps {
    children: any
    color?: "green" | "red" | "gray"|"teal",
    classname?: string
}
export default function Button(props: ButtonProps) {
    // const {color="gray", classname, children} = props
    const color = props.color || "gray"
    console.log("Cor é: ", color)
    const {classname, children} = props
    return(
        <button className={`
        bg-gradient-to-r from-${color==="green"? color+"-600": color+"-700"} ${color==="red" ? "to-scarlet" :"to-dusk"}
        text-white px-4 py-2 rounded-md
        ${classname}
        `}>
            {children}
        </button>
    )
}