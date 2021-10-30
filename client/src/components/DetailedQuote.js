import React from 'react'

const DetailedQuote = ({quote}) => {
    return (
        <ul>
        <li>{quote.id}</li>
        <li>{quote.name}</li>
        <li>{quote.description}</li>
        <li>{`$${quote.price}`}</li>
        </ul>
    )
}

export default DetailedQuote
