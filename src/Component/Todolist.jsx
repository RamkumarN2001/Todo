import { useState } from "react"
import Todoitem from "./Todoitem"
function Todolist(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today Activity</h1>

            {
                activityArr.length==0?<p>You Havent added any activity</p>:""
                          
            }
            
            {
                activityArr.map(function (item,index) {
                    return <Todoitem id={item.id} item={item} index={index} activityArr={activityArr} setactivityArr={setactivityArr}/>
                })
            }
        </div>
    )
}
export default Todolist