import React from 'react'
import styles from "./Links.module.css";

const Links = ({url,children}) => {
  return (
    <li>
     <a href={url}>{children}</a>
    </li>
  )
}

export default Links
