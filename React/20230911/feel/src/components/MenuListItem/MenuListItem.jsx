import React from 'react';
import "./MenuListItem.css";

export default function MenuListItem(props) {
  const onitemClick = () => {
    props.setCurrentFeel(props.feel)
  }
  console.log(props)
  return (
    <li>
      <button onClick={onitemClick} className='btn-item'>기분이 : {props.feel}</button>
    </li>
  )
}
