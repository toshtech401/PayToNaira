import { useState } from "react";

const ShortenLinks = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const [errMessage, setErrMessage] = useState(false);

  const handleClick = () => {
    if (value.length === 0) {
      setErrMessage(true);
    } else {
      setInputValue(value);
      setValue("");
      setErrMessage(false);
    }
  };

  return (
    <>
      <div className="form" data-aos="zoom-in-down">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="err" style={{ color: "red" }}>
          {errMessage ? "Please add a link" : " "}
        </p>
        <button onClick={handleClick}>Shorten it!</button>
      </div>
    </>
  );
};

export default ShortenLinks;
