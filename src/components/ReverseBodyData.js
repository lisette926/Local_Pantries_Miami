import { Component } from "react";
import "./BodyStyles.css";
import photo2 from "../assets/pic1.png";

class ReverseBodyData extends Component {
  render() {
    return (
      <div className="reverse-body-section">
        <div className="first-body">
          <div className="image">
            <img alt="" src={this.props.img2} />
          </div>

          <div className="body-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ReverseBodyData;
