import { useEffect, useState } from "react";

const Title = () => {
  let text = "Find your streaming family.";
  const [animatedText, setAnimatedText] = useState("");
  text = Array.from(text);
  useEffect(() => {
    const timeouts =[]

    setAnimatedText("");
    text.forEach((element, index) => {
     const timeoutIndex =  setTimeout(() => {
        setAnimatedText((prev) => (prev += element));
      }, 100 * index);
      timeouts.push(timeoutIndex)
    });


    return ()=>{
      timeouts.forEach((timeout)=>{
        clearTimeout(timeout)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="title">{animatedText}</div>;
};

export default Title;
