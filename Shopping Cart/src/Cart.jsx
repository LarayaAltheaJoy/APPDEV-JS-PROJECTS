import React, {useState} from 'react';
import ShoppingCart from './ShoppingList';

var items = [];
export default function Form(){
    const [name, setName] = useState('');

    function handleNameChange (event){
        setName(event.target.value);
    }

    function addItems(){
        items.push({
            name: name,
        })
        setName('');
    }
    return(
        <>
        <h2>Shopping Cart Items: </h2>
        <div className="form-container">
           <strong>PRODUCT LIST:</strong>  <br/>
            <select value={name} onChange={handleNameChange} className="drop-down" >
                <option value="" disabled selected>Select Product</option>
                <option >Rice</option>
                <option >Fish Sauce</option>
                <option >Soy</option>
                <option >Vinegar</option>
                <option >Garlic</option>
                <option >Egg 🥚</option>
                <option >Tomato</option>
                <option >Onion</option>
                <option >Apple</option>
                <option >Banana</option>
            </select><br /><br />
            <button onClick = {addItems}>Add to Cart</button><hr />
        </div>
        {items.length > 0 ? (<ShoppingCart item = {items}/>) : (<p>No Items.</p>)}
        </>
    );
}