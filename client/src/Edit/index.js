import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditMovie = () => {
    const params = useParams();
    const [newMovieData, setNewMovieData] = useState({})
    const fetchMovie = (id) => {
        axios
          .get(`http://localhost:5000/api/movies/${id}`)
          .then((res) => setNewMovieData(res.data))
          .catch((err) => console.log(err.response));
      };
    
    useEffect(()=>{
        fetchMovie(params.id);
    },[params.id]);

    const axiosPut = (id ,movieUpdate) => {
        axios
            .put(`http://localhost:5000/api/movies/${id}`,movieUpdate)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    // Set initial State to prop data of edited movie,
    //  this way is something is not changed it does not return emtpy
    // FIRST WILL TEST W/O

   

    const handleChange = e => {
        setNewMovieData({
            ...newMovieData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosPut(params.id, newMovieData)
    }

    return(
        <>
        <h1>Edit Movie</h1>
        <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input 
                onChange={handleChange}
                type="text"
                name = "title"
                value = {newMovieData.title}
                placeholder ="title"/>
            <label>Director: </label>
            <input 
                onChange={handleChange}
                type="text"
                name = "director"
                value = {newMovieData.director}
                placeholder = "name"/>
            <label>MetaScore:</label>
            <input 
                onChange={handleChange}
                type="number"
                name = "metascore"
                value = {newMovieData.metascore}
                min = "0"
                max = "100"/>
            <label>Stars: </label>
            <input 
                onChange={handleChange}
                type = "text"
                name = "stars"
                value = {newMovieData.stars}
                placeholder="name"/>
            <button>Update</button>
        </form>
        </>
    )
}

export default EditMovie;