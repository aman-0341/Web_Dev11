import React,{useState} from 'react';
import './ProductForm.css';
function ProductForm(props)
{
    const[title,setTitle]=useState('');
    const[date,setDate]=useState('');
    function titleChangeHandler(event)
    {
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    function dateChangeHandler(event)
    {
        setTitle(event.target.value);
        // console.log(event.target.value);
        console.log(title);
        console.log(date);
    }
    return(<form>
        <div className='new-product_controls'>
        <label>Title</label>
        <input type='text' onChange={titleChangeHandler}></input>


        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type='date' min='01-01-2023' max='12-12-2023' onChange={dateChangeHandler}></input>
        </div>
        <div className='new-product_button'>
            <button type="submit">Add Product</button>
        </div>
        
    </form>);

}
export default ProductForm;