
import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <>
      <style>
        {`
          .loading-dots span {
            opacity: 0;
            animation: loading 1.4s infinite;
          }

          .loading-dots span:nth-child(1) {
            animation-delay: 0s;
          }

          .loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
          }

          .loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes loading {
            0%, 20% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>

      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <Spinner
          animation="border"
          variant="primary"
          style={{ width: "3rem", height: "3rem" }}
        />

        <p className="mt-3 text-secondary fw-semibold">
          Loading
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    </>
  );
};

export default Loading;

