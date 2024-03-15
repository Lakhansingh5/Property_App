import "./Page4.css";
import image5 from "../assets/image5.png";

const Page4 = () => {
  return (
    <div className="gradient">
      <h1 className="trusted">
        your <span className="italic">trusted</span> partner in
        <br /> the future <span className="italic">of housing</span>
      </h1>
      <p>
        Our partnerships with governments and local banks ensure that our
        housing prices are <br />
        affordale enough for our target market.
      </p>
      <br /> <br />
      <button className="button-17">Join Our Community Today</button>
      <img className="image5" src={image5} alt="" />
    </div>
  );
};

export default Page4;
