import React, { useEffect, useState } from 'react'
import ImageList from './components/ImageList'
import useScroll from './Hook/useScroll'
import Loading from './components/Loading'

export default function App2() {
  const [imageList, setimageList] = useState([])
  // api에 전달할 페이지 값을 관리합니다.
  const [pageToFetch, setpageToFetch] = useState(1)

  // 로딩중인 상태를 관리한다.
  const [isLoading, setisLoading] = useState(false)
  const isBottom = useScroll()

  // 스크롤이 끝까지 이동했을 경우 데이터 페이지를 하나 올린다.
  useEffect(() => {
    if(isBottom) {
      setpageToFetch((prevPage) => {
        return prevPage+1
      })
    }
  }, [isBottom])

  async function fetchImagesByPages() {
    setisLoading(true)
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`)
      if(!response.ok) {
        throw new Error('네트워크에 문제가 발생했습니다!')
      }
      const data = await response.json()

      // console.log(data)
      // 기존 데이터를 유지하고 추가 데이터를 받아 업데이트 하기
      setimageList((prevDatas) =>{
        return [...prevDatas, ...data]
      })
      setisLoading(false)

    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() =>{
    fetchImagesByPages()
  }, [pageToFetch])

  return (
    <>
      <ImageList imageList={imageList} />
      {isLoading && <Loading />}
    </>
  )
}
