import styles from "./Moviecard.module.css"

const Moviecard = (props) => {
  return (
    <>
    <div>className={styles.movie}
      <p>{props.year}</p>
    </div>


<div>
    <img src={props.poster} alt={props.title}/>
</div>

<div>
<span>{props.type}</span>
<h3>{props.Title}</h3>
</div>
</>
  )
}


export default Moviecard
