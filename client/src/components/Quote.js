function Quote({ quote, onChoose, keyId}) {
    return (
        <tr key={keyId} onClick={() => onChoose(quote.id)}>
        <td>{quote.id}</td>
        <td>{quote.name}</td>
        <td>{quote.destination}</td>
        <td>{`$${quote.price}`}</td>
      </tr>
    )
}

export default Quote