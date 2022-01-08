export default function Tittle (props) {
    return (
        <div className={`
        flex flex-col justify-center
        `}>
            <h1 className="px-5 py-2"> {props.content} </h1>
            <hr className="border-2 border-dusk" />
        </div>
    )
}