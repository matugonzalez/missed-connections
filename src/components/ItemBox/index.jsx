import { useState } from "react"

const ItemBox = ({item, pickedItems, setPickedItems}) => {
    const [isSelected, setIsSelected] = useState(false)

    const isThereSpace = () => pickedItems.length < 4

    const handleOnClick = () => {
        if (!isSelected){
            if (!isThereSpace()) {
                const reducedItems = pickedItems
                reducedItems.shift()
                setPickedItems(reducedItems)
            }
            setPickedItems(prevItems => [...prevItems, item])
            setIsSelected(true)
        } else {
            const updatedItems = pickedItems.filter(pickedItem => pickedItem !== item);
            setPickedItems(updatedItems)
            setIsSelected(false)
        }
    }

    const isPicked = () => {
        return (pickedItems.some((i) => i == item))
    }

    // if (!isPicked()) {
    //     setIsSelected(false)
    // }
    return (
        <button
        className= {` rounded-lg p-1 aspect-square text-center grid place-items-center  duration-100 ${isSelected ? 'bg-lime-700 hover:bg-lime-500' : 'bg-purple-700 hover:bg-purple-500'}`}
        onClick={handleOnClick}
        >
            {item.name}
        </button>
    )
}
export default ItemBox