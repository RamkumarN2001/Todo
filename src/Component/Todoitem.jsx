function Todoitem(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function handledelete(deleteid) {

        var temparr=activityArr.filter(function(item){

            if(item.id==deleteid){
               return false 
            }
            else{
                return true
            }
        })
     setactivityArr(temparr)
    }



    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.item.activity}</p>
            <buttton className="text-red-500 cursor-pointer" onClick={() => handledelete(props.id)} >Delete</buttton>
        </div>
    )
}
export default Todoitem