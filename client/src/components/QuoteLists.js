import Quote from './Quote'
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { getQuotesQuery } from '../graphql/queries';

function QuoteLists({ onChoose }){
  const { loading, error, data } = useQuery(getQuotesQuery);
      
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const quotes = data.quotes;
 
    return (
        <table>
            <tbody>
                <tr>
                    <th>ID#</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                    <th>User Name</th>
                </tr>
                {quotes.map((quote, index) => <Quote quote={quote} index={index} onChoose={onChoose} />)}

            </tbody>
        </table>
    )
}

// bind getUsersQuery with QuoteLists component
export default QuoteLists;
