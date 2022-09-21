function SivakToWatchList() {
  const movies = ['Film1', 'Film2', 'Film3'];
  const movieList = movies.map((item) => <li>{item}</li>)
  return (
    <div className="to_watch">
      <h3> I'm Sivak's To-Watch List </h3>
      <ul>{movieList}</ul>
    </div>
  );
}

export default SivakToWatchList;