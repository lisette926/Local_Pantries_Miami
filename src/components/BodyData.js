import { Component } from "react";
import "./BodyStyles.css";
import photo1 from "../assets/pic1.png";

class BodyData extends Component {
  render() {
    return (
      <div className="body-section">
        <div className="first-body">
          <div className="body-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>

          <div className="image">
            <img alt="" src={this.props.img1} />
          </div>
        </div>
      </div>
    );
  }
}
export default BodyData;
