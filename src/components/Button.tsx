import Lottie from 'react-lottie'
import * as animationData from '../../assets/loading_button.json'
interface ButtonProps {
    children: any
    color?: "green" | "red" | "gray"| "teal",
    classname?: string,
    onClick?: () => void,
    isLoading?: boolean
}
export default function Button(props: ButtonProps) {
    const color = props.color || "gray"
    const {classname, children, onClick} = props
    // const isLoading = props.isLoading
    const isLoading = props.isLoading

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          PreserveAspectRatio: 'xMidYMid slice'
        }
      }
      const Loading_Animation = <Lottie options={defaultOptions} height={100} width={100}/>
    return(
        <button onClick={onClick} className={`flex
        bg-gradient-to-r from-${color}-700 ${color==="red" ? "to-scarlet" :"to-dusk"}
        max-h-14 w-44 justify-center items-center
        text-white px-4 py-2 rounded-md
        ${classname}
        `}>
            {isLoading?Loading_Animation:children}
        </button>
    )
}