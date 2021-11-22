/* eslint-disable no-unused-vars */
import './App.css';

import QuoteLists from './components/QuoteLists';
import DetailedQuote from './components/DetailedQuote';

import { client } from './graphql/queries';
import { 
  ApolloProvider
} from '@apollo/client';
import { useState } from 'react';
import AddNewQuote from './components/AddNewQuote';


function App() {
  // using hook to reserve data
  
  // rest API way of fetch
  // useEffect(() => {
  //   const fetchQuotes = async () => {
  //     const res = await fetch('http://localhost:8080/api/quotes');
  //     const data = await res.json()
  //     setQuotes(data);
  //   }
  //   fetchQuotes();
  // }, []);

  const [quote, setQuote] = useState({});
  const onChoose = (quote) => {
    setQuote(quote);
  }
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className='frame'>
          <QuoteLists onChoose = {onChoose} />
        </div>
        { 'id' in quote &&
          <div className='frame'>
            <DetailedQuote quote={quote}/>
          </div>
        }
        <AddNewQuote></AddNewQuote>
      </div>
    </ApolloProvider>
  );
}

export default App;
