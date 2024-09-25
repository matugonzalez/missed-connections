import { useState } from "react";

const ItemBox = ({item, pickedItems, setPickedItems, items}) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleOnClick = () => {

        if(!isSelected){
            setPickedItems(prevItems => [...prevItems, item]);
            setIsSelected(true);
        } else {
            const updatedItems = pickedItems.filter(pickedItem => pickedItem !== item);
            setPickedItems(updatedItems)
            setIsSelected(false)
        }
    }
    return (
        <button
        className= {` rounded-lg p-1 aspect-square text-center grid place-items-center  duration-100 ${isSelected ? 'bg-lime-700 hover:bg-lime-500' : 'bg-purple-700 hover:bg-purple-500'}`}
        onClick={handleOnClick}
        >
            {item.name}
        </button>
    );
}
export default ItemBox;