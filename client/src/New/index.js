import React, {useState} from "react";
import axios from "axios";

const NewMovie = () => {

    const [newMovie, setNewMovie]  = useState({})

    const axiosAdd  = (data) =>{
        axios
            .post('http://localhost:5000/api/movies/',data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }


    const handleChange = e => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosAdd(newMovie);
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title: </label>
      <input
        onChange={handleChange}
        type="text"
        name="title"
        value={newMovie.title}
        placeholder="title"
      />
      <label>Director: </label>
      <input
        onChange={handleChange}
        type="text"
        name="director"
        value={newMovie.director}
        placeholder="name"
      />
      <label>MetaScore:</label>
      <input
        onChange={handleChange}
        type="number"
        name="metascore"
        value={newMovie.metascore}
        min="0"
        max="100"
      />
      <label>Stars: </label>
      <input
        onChange={handleChange}
        type="text"
        name="stars"
        value={newMovie.stars}
        placeholder="name"
      />
      <button>Add</button>
    </form>
  );
};

export default NewMovie;
