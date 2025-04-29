import { useRouteError } from "react-router-dom"
const Error = () => {
    const { status, statusText } = useRouteError();
    console.log(status)
    return (
        <div className="align-center">
            <h1>ohh!</h1>
            <h2>Something went wrong!!</h2>
            <p>{status + ":" + statusText}</p>
        </div>
    )
}
export default Error