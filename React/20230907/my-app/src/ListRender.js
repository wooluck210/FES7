import './ListRender.css'


const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

// 이 방법은 key props를 주지 않아도 에러가 나지 않는다.
// function ListItem({ data }) { // {data} : 구조분해 할당으로 data라는 이름 사용하기
//     return <li className={data.visited?'visited':''}>{data.area}</li>
// }

function ListRender() {
    // map 을 통한 반복적인 컴포넌트 랜더링
    const areas = list.map((item)=>{
      return(
        <li key={item.no} className={item.visited?'visited':''}>{item.area}</li>
      )
    });

    // areas 안의 상황
    // [ <li className={item.visited ? "visited" : ''}>{item.area}</li>,
    // <li className={item.visited ? "visited" : ''}>{item.area}</li>,
    // <li className={item.visited ? "visited" : ''}>{item.area}</li>,
    // <li className={item.visited ? "visited" : ''}>{item.area}</li>]
    return (
        <ul className="list-area">
            {/* <ListItem data={list[0]} />
            <ListItem data={list[1]} />
            <ListItem data={list[2]} />
            <ListItem data={list[3]} /> */}
            {areas}
        </ul>
    )
}

export default ListRender;