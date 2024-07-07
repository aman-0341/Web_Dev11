import './Item.css';
function Item(props)
{
    const Item_name=props.name;
    return(<p className="nirma">{Item_name}</p>);
}
export default Item;