import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

function RouteQuiz() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* Outlet의 역할 : 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트 */}
        {/* <Route path="/users/*" element={<Outlet/>}> */}
        <Route path="/users/*" element={<Users />} />
          {/* 이 안에 중첩할 라우트들이 들어갑니다 */}
          {/* 여기 주소는 /users */}
          {/* <Route path="" element={<Users/>}/> */}
          <Route path="coupon" element={<Coupon/>} />
          <Route path="question" element={<Question/>} />
          <Route path="notice" element={<Notice/>} />
        <Route/>
        <Route path="/products/:id" element={<ProductDetailPage/>} />
        {/* <Route path="/products/:id" element={<ProductDetailPage/>} /> */}
        <Route path="/products/:id/notice" element={<ProductDetailNoticePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function ProductDetailNoticePage() {
  const {id} = useParams()
  return <h1> {id}번 상품 상세 알림 페이지</h1>
}

function Homepage() {
  return<h1>Homepage</h1>
}

function Cart() {
  return<h1>Cart</h1>
}

function Users() {
  return(
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  )
}

function ProductDetailPage() {
  const {id} = useParams()
  return<h1>{id}번 상품입니다!</h1>
}

function Coupon() {
  return<h1>Coupon</h1>
}

function Question() {
  return<h1>Question?</h1>
}

function Notice() {
  return<h1>Notice!</h1>
}

export default RouteQuiz;