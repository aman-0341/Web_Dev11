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
        setDate(event.target.value);
        // console.log(event.target.value);
        // console.log(title);
        // console.log(date);
    }
    function submitHandler(event)
    {
        event.preventDefault();

        const productData={
            title:title,
            date:date
        };
        //Here we are just assigning this objects the name titlt:titlt confuse mat hona .
        //Ye object ki entites ke name hai different bhi ho sakte hai

        console.log(productData);

        setTitle(' ');
        setDate(' ');
    }
    return(<form onSubmit={submitHandler}>
        <div className='new-product_controls'>
        <label>Title</label>
        <input type='text' value={title}  onChange={titleChangeHandler} ></input>


        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type='date' value={date} min='2023-01-01' max='2023-12-12'  onChange={dateChangeHandler} ></input>
        </div>
        <div className='new-product_button'>
            <button type="submit">Add Product</button>
        </div>
        
    </form>);

}
export default ProductForm;