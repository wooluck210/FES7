import './App.css';

function App() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const name = '라이캣!';

  return (
    <div>
			<h1 style={{backgroundColor:"black", color:"white"}}>
				안녕, {name} 1호
			</h1>
			<h1>안녕, 라이캣 2호!</h1>
			<div className="newClass"/>
      <div style={{backgroundColor:"white", width:"100%", height:"20px"}}></div>
      <div style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{color:"red"}}>년 : {year}</h1>
        <h1>월/일 : {month+1}/{date}</h1>
        <h1>시간 : {hour}시 {minute}분 {second}초</h1>
      </div>
		</div>
  );
}

export default App;
