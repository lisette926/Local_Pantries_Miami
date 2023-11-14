import photo3 from "../assets/pic3.png";
import photo4 from "../assets/pic4.png";
import "./BodyStyles.css";
import BodyData from "./BodyData";
import ReverseBodyData from "./ReverseBodyData";

const Volunteers = () => {
  return (
    <div className="body">
      <BodyData
        heading="Volunteer"
        text="Giving your time and skills at local food pantries is a great way to make a  direct impact. Volunteer at your local food pantry today!"
        img1={photo3}
      />

      <ReverseBodyData
        heading="Donate"
        text="Every donation, big or small, helps us provide nutritious meals to those who need them most. Learn how your contribution can make an impact."
        img2={photo4}
      />
    </div>
  );
};
export default Volunteers;
