import './App.css'
import {useState} from 'react'
function App(){
const [items,setItems] = useState([])
const [itemName,setItemName] = useState("")
const [itemPrice,setItemprice] = useState("")

const handleInputValue = (e)=>{
if(e.target.name === "itemName"){
  setItemName(e.target.value)
} else if(e.target.name === "itemPrice"){
  setItemprice(e.target.value)
}
}

const addItems = (e)=>{
e.preventDefault()

  if(itemName === '' || itemPrice === ''){
    return;
  }

  const addItem = {name:itemName,price:itemPrice}
  setItems([...items,addItem])
  setItemName('')
  setItemprice('')
}

const clearAll = ()=>{
setItems([])
}
  return(
<div className="price-tracker">
<h2 className="heading">Price Tracker</h2>
<form>
  <label>Item name</label><br/>
  <input
  onChange = {handleInputValue}
  value={itemName}
  name="itemName"
  type="text"
  /><br/>
  <label>Item Price</label><br/>
  <input
  onChange ={handleInputValue}
  value={itemPrice}
  name="itemPrice"
  type="number"
  /><br/>
  <button className='add-item' onClick={addItems}>Add Items</button>
  <button className='clear-all' onClick={clearAll}>Clear All</button>
</form>
<div className="item">
{
  items.map((item,index)=>(
    <div key={index}>
     <span className='item-name'>{item.name}</span> - <span className='item-price'>{item.price}</span>
    </div>
  ))
}
</div>
</div>
  )
}

export default App