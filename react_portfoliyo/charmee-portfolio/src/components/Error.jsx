import { Link, useRouteError } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Error.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <Container>
        <div className="error-page__inner">
          <p className="error-page__code">404</p>
          <h1 className="error-page__title">Page Not Found</h1>
          <p className="error-page__comment">
            {`// ${error?.statusText || error?.message || "This page doesn't exist"}`}
          </p>
          <p className="error-page__message">
            The page you&apos;re looking for has wandered off into the void.
            Let&apos;s get you back to safety.
          </p>
          <Link to="/" className="btn-neon" aria-label="Go to home page">
            ← Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;