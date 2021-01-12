import { useEffect, useState } from "react";

const Title = () => {
  let text = "Find your streaming family.";
  const [animatedText, setAnimatedText] = useState("");
  text = Array.from(text);
  useEffect(() => {
    setAnimatedText("");
    text.forEach((element, index) => {
      setTimeout(() => {
        setAnimatedText((prev) => (prev += element));
      }, 100 * index);
    });


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="title">{animatedText}</div>;
};

export default Title;
