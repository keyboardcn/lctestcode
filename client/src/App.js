import './App.css';

import QuoteLists from './components/QuoteLists';
import DetailedQuote from './components/DetailedQuote';
import { useState, useEffect } from 'react';

function App() {
  const [quotes, setQuotes] = useState([{ }])
  const [activeId, setActiveId] = useState(0)
  
  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch('http://localhost:8080/api/quotes');
      const data = await res.json()
      console.log(data);
      setQuotes(data);
    }
    fetchQuotes();
  }, [])
  

  const chooseActiveId = (id) => {
    setActiveId(id);
  }
  return (
    <div className="App">
      <div className='frame'>
        <QuoteLists quotes={quotes} onChoose={chooseActiveId}/>
      </div>
      <div className='frame'>
        {activeId >0 && <DetailedQuote quote={quotes.find(itm => itm.id === activeId)}/>}
      </div>
    </div>
  );
}

export default App;
