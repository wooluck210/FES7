import React from 'react'

export default function AddPet() {
  return (
    <div>
      <input type='text' placeholder='이름'></input>
      <input type='text' placeholder='species'></input>
      <input type='number' placeholder='나이'></input>
      <button type='button'>추가하기</button>
    </div>
  )
}
