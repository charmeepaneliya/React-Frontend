import {Link,useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <>
      <h1>Oops!</h1>
      <h1>Something went wrong!</h1>
      <p>{error?.statusText || error?.message ||"Page not found"}</p>
      <Link to="/">Go To Home</Link>
    </>
  );
};

export default ErrorPage;