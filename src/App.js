import './App.css';
import {useState} from 'react';

function App() {
  const [inputValue,setInputValue] = useState('');
  const [focus,setFocus] = useState(false);

  return (
    <div className="App">
      <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onFocus={()=>setFocus(false)} onBlur={()=>setFocus(true)} />
      <h1>{inputValue}</h1>
      <button type='button' disabled={focus? 'disabled' : ''}>submit</button>
    </div>
  );
}

export default App;
