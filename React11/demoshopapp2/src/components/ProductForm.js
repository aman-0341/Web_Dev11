import './ProductForm.css';
function ProductForm(props)
{
    function titleChangeHandler(event)
    {
        console.log(event.target.value);
    }
    return(<form>
        <div className='new-product_controls'>
        <label>Title</label>
        <input type='text' onChange={titleChangeHandler}></input>


        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type='date' min='01-01-2023' max='12-12-2023'></input>
        </div>
        <div className='new-product_button'>
            <button type="submit">Add Product</button>
        </div>
        
    </form>);

}
export default ProductForm;