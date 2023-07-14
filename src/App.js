    import {useEffect, useState} from 'react';

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function adviceMe() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

    useEffect(function() {
      adviceMe();
    }, []);

  return (
    <div>
      <h1>{advice}</h1>
       <button onClick={adviceMe}>Tell Me A Wise Saying That Applies to my Reality</button>
        <p>
          So far, you have read <strong>{count}</strong> pieces of advice.
        </p>
    </div>
  );
}