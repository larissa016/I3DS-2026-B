import { useState } from "react";
import styles from "./Moviecard.module.css";
import MovieDescription from "../MovieDescription/MovieDescription";

const CartaoFilme = (props) => {
  const [modalAberto, setModalAberto] = useState(false);

  const alternarModal = () => {
    setModalAberto(!modalAberto);
  };

  return (
    <>
      <div className={styles.movie} onClick={alternarModal}>

        <div>
          <p>{props.Year}</p>
        </div>

        <div>
          <img src={props.Poster} alt={props.Title} />
        </div>

        <div className={styles.movieInfo}>
          <span>{props.Type === "movie" ? "Filme" : props.Type}</span>
          <h3>{props.Title}</h3>

          <span className={styles.rating}>
            ⭐ {props.rating ? props.rating : "7.5"}
          </span>

        </div>

      </div>

      {modalAberto && (
        <MovieDescription
          apiUrl={props.apiUrl}
          click={alternarModal}
          movieID={props.imdbID}
        />
      )}
    </>
  );
};

export default CartaoFilme;