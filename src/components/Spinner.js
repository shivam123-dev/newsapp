import React, { Component } from "react";
export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center m-5">
        <div className={`spinner-border text-${this.props.color} my-3`} role="status">
        </div>
      </div>
    );
  }
}

export default Spinner;
