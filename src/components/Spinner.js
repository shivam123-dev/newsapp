import React from "react";
const Spinner = (props) => {
  return (
    <div className="d-flex justify-content-center m-5">
      <div
        className={`spinner-border text-${props.color} my-3`}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
