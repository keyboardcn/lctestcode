import Quote from './Quote'
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { getUsersQuery, addQuoteMutation, getQuotesQuery } from '../graphql/queries';

function AddNewQuote({}) {
    
    const [bookState, setBookState] = useState({
        name: '',
        description: '',
        price: null,
        userId: null,
    });
    const [addQuote] = useMutation(addQuoteMutation);
    const { loading, error, data } = useQuery(getUsersQuery);
      
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const users = data.users;
    
    function submitForm(e) {
        e.preventDefault();
        addQuote({variables: bookState, refetchQueries: [{ query: getQuotesQuery}]});
        setBookState({});
    }

    return(
        <form onSubmit={ e => submitForm(e)}>
            <input type="text" name="name" onChange = {(e) => {setBookState({ ...bookState, name: e.target.value }) }}/>
            <input type="text" name= "description" onChange = {(e) => {setBookState({ ...bookState, description: e.target.value }) }} />
            <input type="number" name="price" onChange = {(e) => {setBookState({ ...bookState, price: parseInt(e.target.value, 10) }) }} />
            <select name="userId" onChange = {(e) => {setBookState({ ...bookState, userId: e.target.value }) }}>
                {users.map(itm => <option value={itm.id}>{itm.name}</option>)}
            </select>
            <button>+</button>
        </form>
    );
}

export default AddNewQuote;