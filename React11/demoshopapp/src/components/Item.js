import './Item.css';
function Item(props)
{
    const Item_name=props.name;
    return(
    <div>
        <p className="nirma">{Item_name}</p>
        {props.children}
        </div>
    );
}
export default Item;