import React from 'react';
import style from './style.module.css';

export default (props) => {
  const {display} = props;
  if(!display) { return(<div></div>);}
  return (
    <div className={style.overlay}>
      Overlay Menu
    </div>
  )
}
