import photo1 from "../assets/pic1.png";
import photo5 from "../assets/pic5.png";
import "./BodyStyles.css";
import BodyData from "./BodyData";
import ReverseBodyData from "./ReverseBodyData";

const About = () => {
  return (
    <div className="body">
      <BodyData
        heading="Mission"
        text="The goal is to provide a web application that increases awareness on food insecurity, what it is, how to help, and where to find your local pantry in the city of Miami."
        img1={photo5}
      />

      <ReverseBodyData
        heading="Making a Difference"
        text="This project will ensure that individuals facing food insecurity 
        can easily locate nearby food pantries. The pantry locator will also
        provide the phone number and email address of the point of contact of 
        each location."
        img2={photo1}
      />
    </div>
  );
};
export default About;
