import React, { useState } from 'react';

const Demo1 = () => {

  const [num, setNum] = useState(0);

  const countReset = () => {
    setNum(0);
  }

  const countUp = () => {
    setNum((prev) => prev + 1);
  }

  const count10Up = () => {
    setNum((prev) => prev + 10);
  }

  const countDown = () => {
    setNum((prev) => prev - 1);
  }

  const count10Down = () => {
    setNum((prev) => prev - 10);
  }

  return (
    <div>
      <p>{num}</p>
      <button onClick={countReset}>リセット</button>
      <button onClick={countUp}>カウントアップ</button>
      <button onClick={countDown}>カウントダウン</button>
      <button onClick={count10Up}>10カウントアップ</button>
      <button onClick={count10Down}>10カウントダウン</button>
    </div>
  );
}

export default Demo1;
