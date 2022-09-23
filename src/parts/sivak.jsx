import './sivak.css'
import { useState } from 'react'

function SivakToWatchList() {

  const [movies, setMovies] = useState([
    { title: 'Film 1', img: 'src/images/watch-list/02.jpg' },
    { title: 'Film 2', img: 'src/images/watch-list/03.jpg' },
    { title: 'Film 3', img: 'src/images/watch-list/04.jpg' }]);

  const displayMovies = (movie) => <li key={movie.title}><a href="">{movie.title}</a></li>
  const movieList = movies.map(displayMovies)

  const displayImages = (movie) => <img src={movie.img} alt={movie.title} />
  const imgList = movies.map(displayImages)

  const classRoom = (student) => <li>{student.name}</li>

  return (
    <div className="to_watch">
      <h3>My Favorite Watch List</h3>
      <ol>{imgList}{movieList}</ol>
    </div>
  );
}

export default SivakToWatchList;