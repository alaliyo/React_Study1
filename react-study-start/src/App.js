import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('계속 실행');
  }, [counter]);

  useEffect(() => console.log("api 호출"), []);

  useEffect(() => console.log('text', keyword), [keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='검색' />
      <h1>클릭 횟수: {counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}


export default App;
