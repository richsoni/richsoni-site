"use strict"
import React from 'react';
import HF from "../../shared/header-footer/"
import styles from './styles.module.css';

// 2 until 750px
// 4 until 1000
// 1 50%, and the rest equal

const Release = (props) => {
  console.log(props)
  const {title, released_on} = props
  return <a
    className={styles.item}
    href={props.url}
  >
    <div className={styles.overlay}>
      <div className={styles.title}>{title}</div>
      <div className={styles.year}>2017</div>
    </div>
  </a>
}

export default (props) => {
  const {
    releases
  } = props
  return <HF>
    <div className={styles.list}>
      {Object.values(releases).map((r) => {
        return <Release key={r.slug} {...r} />
      })}
    </div>
  </HF>
}
