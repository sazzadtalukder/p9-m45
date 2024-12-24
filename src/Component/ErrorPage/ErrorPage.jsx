import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <p>NO nO no ! wrong url</p>
            <p>{error.statusText}</p>
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default ErrorPage;