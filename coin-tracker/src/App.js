import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [Value, setValue] = useState(0);
  const [count, setCount] = useState(21281.5483);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const changeValue = (event) => {
    setCount(event.target.value);
  };

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={changeValue} value={count}>
          {coins.map((item, index) => (
            <option key={index} value={item.quotes.USD.price}>{item.name} ({item.symbol}): ${item.quotes.USD.price} USD</option>
          ))}
        </select>
      )}
      <br/>
      <input 
        onChange={onChange} 
        type="number" 
        value={Value}
      />
      <br/>
      <h3>구매 가능 개수: {Math.floor(Value / count)}</h3>
    </div>
  );
}

export default App;