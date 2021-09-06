import React from "react";

import "./index.css";

const Btn = ({ label }) => {
  return (
    <div data-testid="btn" className="button-style">
      {label}
    </div>
  );
};

export default Btn;
