import React from "react";
// import { Alert } from "react-bootstrap";

const ErrorList = (props) => {
  if (props && props.error) {
    if (typeof props.error === "string") {
      return (
        <div className="danger">
          <span className={props.m}>{props.error}</span>
        </div>
      );
    }
    if (Array.isArray(props.error) && props.error.length > 0) {
      return (
        <div className="danger">
          {props.error.map((e, i) => (
            <span key={i} className="d-block">
              {e}
            </span>
          ))}
        </div>
      );
    }
    if (
      typeof props.error === "object" &&
      Object.keys(props.error).length > 0
    ) {
      return (
        <div className="danger">
          {Object.values(props.error).map((e, i) => (
            <span key={i} className="d-block">
              {e}
            </span>
          ))}
        </div>
      );
    }
  }
  return null;
};

export default ErrorList;
