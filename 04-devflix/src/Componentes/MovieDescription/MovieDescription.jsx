import styles from "./MovieDescription.module.css"
const MovieDescription = (props) => {
  return (
    <div className ={styles.modaBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={() => ""}>

      </div>
    </div>
  )
}

export default MovieDescription
