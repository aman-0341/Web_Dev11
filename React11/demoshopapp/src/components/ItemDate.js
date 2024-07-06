import './ItemDate.css'
function ItemDate()
{
    const date=20;
    const month="July";
    const year=1993;
    return(
        <div className='mfg-date'>
            <span>{date}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    );
}
export default ItemDate;
