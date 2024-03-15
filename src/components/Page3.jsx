import "./Page3.css";

const Page3 = () => {
  return (
    <div className="block">
      <h1>Why Choose XYZ?</h1>
      <section className="reasons">
        <div className="div1">
          <div className="vertical">
            <div className="reason">
              <h2>01</h2>
              <h3>Search and Filters</h3>
              <input type="checkbox" />

              <p>
                Tailored Searches to meet your needs. Find what you are looking
                for with precision.
              </p>
            </div>
          </div>
        </div>

        {/* Another similar div */}
        <div className="div2">
          <div className="vertical">
            <div className="reason">
              <h2> 02 </h2>
              <h3>DETAILED LISTINGS</h3>
              <input type="checkbox" />

              <p>
                Every Detail Matters. Sellers can list, and buyers can explore
                properties that meet their exact specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Another similar div */}
        <div className="div3">
          <div className="vertical">
            <div className="reason">
              <h2> 03 </h2>
              <h3>DIRECT MESSAGING</h3>
              <input type="checkbox" />

              <p>
                Seamless Communication. Connect directly with sellers or buyers
                to ask questions, negotiate, and make decisions
              </p>
            </div>
          </div>
        </div>

        {/* Another similar div */}
        <div className="div4">
          <div className="vertical">
            <div className="reason">
              <h2>04</h2>
              <h3>SECURE PAYMENTS</h3>
              <input type="checkbox" />

              <p>
                Trust in Every Transaction. Our secure payment system ensures
                your peace fo mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page3;
