import illustration from "./illustration-working.svg";

const ArticleOne = () => {
  return (
    <article
      className="article-one"
      data-aos="fade-down"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <img src={illustration} alt="illustration-worker" className="worker" />
      <div className="wrapper">
        <div className="articleone-content ">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </article>
  );
};

export default ArticleOne;
