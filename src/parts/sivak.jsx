function SivakToWatchList() {
  const movies = ['Film 1', 'Film 2', 'Film 3'];
  const movieList = movies.map((item) => <li>{item}</li>)
  return (
    <div className="to_watch">
      <h3>My Favorite Watch List</h3>
      <ol>{movieList}</ol>
    </div>
  );
}

export default SivakToWatchList;