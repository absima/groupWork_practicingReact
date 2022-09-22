import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './sima.css'

function SimaMovieList() {
  return (
      <div className="simapart">
        <Row className=" bgrd">
          <div className="title_div">
            <span className="reco">Today's Recommendation</span>
            <h1 className="title_perfumier">The Perfumier</h1>
            <button type="button" className="btn btn-warning button_perfumier"><i className="bi bi-play"> Watch Now</i> </button>
          </div>
        </Row>

        <Row className="">
          <Col className="col-12">
            <h4 className="trending">Trending movies </h4>
          </Col>
        </Row>

        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 movie_row">
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom"/>
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
        </Row>

        <Row className="">
          <Col className="col-12">
            <h4 className="trending">Trending Tv Series </h4>
          </Col>
        </Row>

        <Row className=" row-cols-2 row-cols-md-3 row-cols-lg-6">
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
          <Col className="col">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" className="zoom" />
          </Col>
        </Row>
      </div>
  );
}

export default SimaMovieList;
