import { useState } from "react"
import mockdata from "../mockdata"
import ItemBox from "./components/ItemBox"
function App() {
    const selectedData = mockdata.animeList.slice(0, 16)
    const [pickedItems, setPickedItems] = useState([])

    return (
        <div className='grid place-items-center min-h-screen bg-gray-900'>
            <div className='bg-purple-950 rounded-lg p-2 text-white grid place-items-center gap-4'>
                <span className='font-bold text-2xl'>Missed Connections</span>
                {pickedItems.map((item, i)=>{
                    return(
                        <span key={i}>{item.name}</span>
                    )
                })}
                <div className='grid grid-cols-4 grid-rows-4 gap-2'>
                    {
                        selectedData.map((item, i) => {
                            return (
                                <ItemBox 
                                    key={i} 
                                    item={item} 
                                    pickedItems={pickedItems} 
                                    setPickedItems={setPickedItems} 
                                    items={selectedData}/>
                            );
                        })
                    }
                </div>
                <div className='flex justify-between w-full'>
                    <button className='bg-red-700 px-8 py-2 rounded-xl'>Clear</button>
                    <button className='bg-lime-700 px-8 py-2 rounded-xl'>Send</button>
                </div>
            </div>
        </div>
    );
}

export default App
