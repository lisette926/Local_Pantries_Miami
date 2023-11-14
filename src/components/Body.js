import photo1 from "../assets/pic1.png";
import photo2 from "../assets/pic2.png";
import "./BodyStyles.css";
import BodyData from "./BodyData";
import ReverseBodyData from "./ReverseBodyData";

const Body = () => {
  return (
    <div className="body">
      <BodyData
        heading="About"
        text="Welcome to Local Pantries Miami, where we're dedicated to ending food insecurity in our community. Explore local pantries and join us in building a hunger-free community. Together, we're connecting communities with nourishing food resources."
        img1={photo1}
      />

      <ReverseBodyData
        heading="Did you know?"
        text="10.4% of people in Miami are food insecure. By raising awareness on this issue, no one in Miami will go to bed hungry.Together, we can make a difference. Explore local pantries, provide support, and help us build a stronger community."
        img2={photo2}
      />
    </div>
  );
};
export default Body;
