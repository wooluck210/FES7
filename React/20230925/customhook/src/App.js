import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useMouseLocation from "./Hook/useMouseLocation";
import useScroll from "./Hook/useScroll";

function App() {
  // console.log(useMouseLocation())
  // const mouseLocation = useMouseLocation()
  const isBottom = useScroll()
  console.log(isBottom)

  return (
    <div style={{height:3000}}>
      {/* <div style={{height:100, width:100, backgroundColor: mouseLocation.x>100 ? "skyblue":"hotpink"}}></div> */}
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
