import { useEffect, useState } from "react"

const ItemBox = ({item, pickedItems, setPickedItems, setAllItemsPicked}) => {
    const [isSelected, setIsSelected] = useState(false)

    const isThereSpace = () => pickedItems.length < 4
    
    const handleOnClick = () => {
        if (!isSelected){
            if (!isThereSpace()) {
                const reducedItems = [...pickedItems.slice(1), item]
                setPickedItems(reducedItems)
            } else {
                setPickedItems([...pickedItems, item])
            }
            setIsSelected(true)
        } else {
            const updatedItems = pickedItems.filter(pickedItem => pickedItem !== item);
            setPickedItems(updatedItems)
            setIsSelected(false)
        }
    }
    
    const isPicked = pickedItems.some(i => i === item)

    useEffect(() => {
        setIsSelected(isPicked)
        setAllItemsPicked(true)
    }, [pickedItems, item])

    return (
        <button
        className= {`text-xs rounded-lg p-1 aspect-square text-center grid place-items-center  duration-100 ${isSelected ? 'bg-lime-700 hover:bg-lime-500' : 'bg-purple-700 hover:bg-purple-500'}`}
        onClick={handleOnClick}
        >
            {item.name}
        </button>
    )
}
export default ItemBox