function Quote({ quote, onChoose, index}) {
    return (
        <tr key={index} onClick={() => onChoose(quote)}>
        <td>{quote.id}</td>
        <td>{quote.name}</td>
        <td>{quote.description}</td>
        <td>{`$${quote.price}`}</td>
        <td>{quote.user? quote.user.name : ''}</td>
      </tr>
    )
}

export default Quote