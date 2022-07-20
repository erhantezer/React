import { useContext } from "react";
import { useState, useEffect } from "react";
import {AuthContext} from "../context/AuthContext";
import axios from 'axios';
import MovieCard from '../components/MovieCard';

// process.env.REACT_APP_TMDB_KEY
const API_KEY = "a9a90e58da935e5528540782b69aa0cf";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const {currentUser} = useContext(AuthContext)

  const getMovies = async (API)=>{
    setLoading(true)
    const {data} = await axios.get(API)
    setMovies(data.results)
    console.log(data.results);
    setLoading(false)
  }

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm  && currentUser) {
      getMovies(SEARCH_API + searchTerm)
    }else if (!currentUser){
      alert("login olunuz")
    }else{
      alert("text iriniz")
    }
  }

  return (
    <>
    <div className="text-center d-flex justify-content-center align-items-center">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input mt-5 m-3 p-2"
          placeholder="Search a movie..."
         onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-info mb-1 text-white fw-bold">Search</button>
      </form>
      <div className="d-flex justify-content-center align-items-center">
        {loading ? (
          <div class="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        ) : (
          movies?.map((movie) => <MovieCard key={movie.id} {...movie}/> )
        )}
      </div>
    </div>

    </>
  );
};

export default Main;
