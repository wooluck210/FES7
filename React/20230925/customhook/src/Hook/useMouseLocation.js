import { useEffect, useState } from "react"

function useMouseLocation(init) {
  const [mouseLocation, setMouseLocation] = useState(init || {x:null, y:null})
  // DOM을 이용하여 화면상의 마우스 좌표를 얻어내고, mouseLocation에 업데이트 하기
  // 이벤트가 발생했을 때 마우스 좌표를 얻어내기. mouseMove
  // const body = document.querySelector('body')
  // body.addEventListener('mousemove', (e) => {setMouseLocation(e.target.value)})
  // console.log(mouseLocation)

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setMouseLocation({x: event.x, y: event.y})
    })
  }, [])
  return mouseLocation
}

export default useMouseLocation