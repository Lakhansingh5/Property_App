import "./Page2.css"; // Import your CSS file
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const Page2 = () => {
  return (
    <div>
      <header className="header">
        <h1 className="how">How it works?</h1>
        <p>Step by Step Guide</p>
        <div className="corousel">
          <img className="image1" src={image1} alt="" />
          <div className="corousel2">
            <h1>Discover your perfect home</h1>
            <p>
              Use our advanced filters to narrow down your search. Specify
              everything from location to amenities, ensuring you find the
              property that feels right.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>

        {/* Another similar div */}
        <div className="corousel3">
          <div className="corousel4">
            <h1>Showcase your property</h1>
            <p>
              List your property with ease. Fill in detailed forms to highlight
              every feature, attracting the perfect buyer directly.
            </p>
            <a href="#">Learn More</a>
          </div>
          <img className="image1" src={image2} alt="" />
        </div>

        {/* Another similar div */}

        <div className="corousel">
          <img className="image1" src={image3} alt="" />
          <div className="corousel2">
            <h1> Connect and Communicate</h1>
            <p>
              Our platform facilitates direct communication between buyer and
              seller, making negotiations transparent and straightforward.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>

        {/* Another similar div */}
        <div className="corousel3">
          <div className="corousel4">
            <h1> Seal the Deal Securely</h1>
            <p>
              Advance payments made safe. Secure your
              agreement with confidence, and step closer to your dream property.
            </p>
            <a href="#">Learn More</a>
          </div>
          <img className="image1" src={image4} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Page2;
