import React from "react";

class main extends React.Component {
  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>{this.props.title}</h2>
          </div>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default main;
