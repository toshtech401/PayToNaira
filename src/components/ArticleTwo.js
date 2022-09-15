import brand from "./icon-brand-recognition.svg";
import records from "./icon-detailed-records.svg";
import customizable from "./icon-fully-customizable.svg";

const ArticleTwo = () => {
  return (
    <article className="article-two">
      <div className="advanced-statistics">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="dashboard">
        <div className="dashboard-line"></div>
        <div className="brand-recognition dashbox" data-aos="fade-left">
          <div className="brand-logo">
            <img src={brand} alt="brand-recognition" />
          </div>
          <h1>Brand Recognition</h1>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="detailed-records dashbox" data-aos="fade-up-right">
          <div className="brand-logo">
            <img src={records} alt="detailed-records" />
          </div>
          <h1> Detailed Records</h1>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="fully-customizable  dashbox" data-aos="flip-up">
          <div className="brand-logo">
            <img src={customizable} alt="customizable" />
          </div>
          <h1>Fully Customizable</h1>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleTwo;
