
import { useState } from "react"

import Addtodo from "./Addtodo"
import Todolist from "./Todolist"
function TodoContainer() {

    const [activityArr, setactivityArr] = useState([{
        id: 1,
        activity: "Go for a walk"
    },
    {
        id: 2,
        activity: "Have a breakfast"
    }


    ])


    return (
        <div>

            <div className="flex gap-5 flex-wrap">
                <Addtodo activityArr={activityArr} setactivityArr={setactivityArr} />
                <Todolist activityArr={activityArr} setactivityArr={setactivityArr} />
            </div>

        </div>
    )
}
export default TodoContainer