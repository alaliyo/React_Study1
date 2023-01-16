import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev+1);

  console.log('계속 실행');

 
  useEffect(() => {
    console.log("api 호출");
  }, []);

  return (
    <div>
      <h1>클릭 횟수: {counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}


export default App;
