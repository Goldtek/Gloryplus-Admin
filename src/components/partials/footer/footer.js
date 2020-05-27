import React from "react";

const footer = () => {
  return (
    <footer className="main-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <p style={{ color: "#ffffff" }}>
              GloryPlus &copy; {new Date().getFullYear()}{" "}
            </p>
          </div>
          <div className="col-sm-6 text-right">
            <p style={{ color: "#ffffff" }}>Version 1.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default footer;
