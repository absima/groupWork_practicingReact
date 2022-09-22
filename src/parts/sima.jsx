// function header() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

function SimaMovieList() {
  return (
    // <div className="container1 movie_list">
    <> 
      <div className="container simapart">
        <div className="row bgrd">
          <div className="title_div">
            <span className="reco">Today's Recommendation</span>
            <h1 className="title_perfumier">The Perfumier</h1>
            <button type="button" className="btn btn-warning button_perfumier"><i className="bi bi-play"> Watch Now</i> </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h4 className="trending">Trending movies </h4>
          </div>
        </div>

        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 movie_row">
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom"/>
          </div>
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </div>
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </div>
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </div>
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </div>
          {/* <div class="col">
      <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG">
          </div> */}
        </div>

        <div className="row">
          <div className="col-12">
            <h4 className="trending">Trending Tv Series </h4>
          </div>
        </div>

        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </div>
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </div>
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </div>
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </div>
          <div className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </div>
          {/* <div class="col">
      <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG">
          </div> */}
        </div>
      </div>
      
    </>
  );
}

export default SimaMovieList;
