
import { useState } from "react"


function Addtodo(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    const [newvalue, setnewvalue] = useState()

    function handllechange(evt) {
        setnewvalue(evt.target.value)
    }

    function handleadd() {
        setactivityArr([...activityArr, { id: activityArr.length + 1, activity: newvalue }])

    }


    return (

        <div className="flex flex-col gap-3 ">
            <h1 className="font-medium text-2xl">Manage Activities</h1>
            <div>
                <input value={newvalue} onChange={handllechange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Actvitity"></input>
                <button onClick={handleadd} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
    )
}
export default Addtodo