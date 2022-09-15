import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  // if (error) {
  //   return <p className="noData">Something went wrong </p>;
  // }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p className="old-link">{inputValue}</p>
          <hr className="result-line" />
          <div className="result-copy">
            <p className="new-link">{shortenLink}</p>

            <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
              <button className={copied ? "copied" : ""}>
                {copied ? "Copied" : "Copy"}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkResult;
