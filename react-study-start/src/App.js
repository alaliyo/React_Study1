import { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('안녕');
    return () => console.log('잘가')
  }, [])
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onclick = () => setShowing((prev) => !prev);

  return (
    <div>
      <button onClick={onclick}>{showing ? 'Hide' : 'show'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;