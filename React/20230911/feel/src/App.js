import MenuList from "./components/MenuList/MenuList";
import MenuListItem from "./components/MenuListItem/MenuListItem";
import DisplayFeel from "./components/DisplayFeel/DisplayFeel";
import { useState } from "react";


function App() {

  const [currentFeel, setCurrentFeel] = useState("");
  return (
    <>
      <h1>오늘의 기분을 선택해주세요 😄</h1>
      <div>
        <MenuList setCurrentFeel={setCurrentFeel}/>
        <DisplayFeel feel={currentFeel}/>
      </div>
    </>
  );
}
export default App;
