import '../scss/custom.css'

function Quote({ quote, onChoose, index}) {
    return (
        <tr key={index} onClick={() => onChoose(quote)}>
        <th scope="row">{quote.id}</th>
        <td>{quote.name}</td>
        <td>{quote.description}</td>
        <td>{`$${quote.price}`}</td>
        <td>{quote.user? quote.user.name : ''}</td>
      </tr>
    )
}

export default Quote