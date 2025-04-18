import Header from "./Component/Header";
import Card from "./Component/Card";
import Todocontainer from "./Component/TodoContainer";
function App() {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  const monthnum= d.getMonth()+1;
  const date = d. getDate();
  let name = [month[monthnum]];


  return (
    <>
      <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10">
          <Header />
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"28"} subtitle={"Chennai"} />
            <Card bgcolor={"#FD6663"} title={name} subtitle={date} />
            <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />

          </div>
          <Todocontainer/>
        </div>
      </div>


    </>
  );
}

export default App;
