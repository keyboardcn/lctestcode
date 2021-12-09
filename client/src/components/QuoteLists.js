import Quote from './Quote'
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import '../scss/custom.css'


import { getQuotesQuery } from '../graphql/queries';

function QuoteLists({ onChoose }){
  const { loading, error, data } = useQuery(getQuotesQuery);
      
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const quotes = data.quotes;
 
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID#</th>
                    <th scope="col">NAME</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">User Name</th>
                </tr>
            </thead>
            <tbody>
                {quotes.map((quote, index) => <Quote quote={quote} index={index} onChoose={onChoose} />)}
            </tbody>

        </table>
    )
}

// bind getUsersQuery with QuoteLists component
export default QuoteLists;
