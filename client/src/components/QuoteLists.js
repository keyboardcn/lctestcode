import React from 'react'
import Quote from './Quote'
const QuoteLists = ({quotes, onChoose}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>ID#</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                </tr>
                {quotes.map((quote) => <Quote quote={quote} onChoose={onChoose} key={quote.id}/>)}

            </tbody>
        </table>
    )
}

export default QuoteLists
