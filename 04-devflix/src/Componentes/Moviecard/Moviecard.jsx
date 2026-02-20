import { useState } from "react";
import styles from "./Moviecard.module.css";
import MovieDescription from "../MovieDescription/MovieDescription";

const Moviecard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(isModalOpen);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.movie} onClick={toggleModal}>
        <div>
          <p>{props.Year}</p>
        </div>

        <div>
          <img src={props.Poster} alt={props.Title} />
        </div>

        <div>
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
        </div>
      </div>

      {isModalOpen && (
        <MovieDescription apiUrl={props.apiUrl} click={toggleModal} movieID={props.imdbID} />
      )}
    </>
  );
};

export default Moviecard;