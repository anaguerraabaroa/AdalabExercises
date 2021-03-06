import React from "react";
import "../stylesheets/_Destiny.scss";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  /* We handle an alert when user choose a destination option*/
  handleOnChange(event) {
    const selectedCity = event.target.value;
    return alert(`Your next destination is ${selectedCity}!`);
  }

  render() {
    return (
      <>
        <form className="form">
          <label htmlFor="select">Select your next destination:</label>
          {/* We add a listener on the select element */}
          <select id="select" name="select" onChange={this.handleOnChange}>
            <option value="Your destination" disabled selected>
              Your destination
            </option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sidney">Sidney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>
        </form>
      </>
    );
  }
}

export default Destiny;
