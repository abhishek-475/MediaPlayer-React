import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Landing() {
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col className="p-5" sm={12} md={6}>
            <h2>
              <i
                className="fa-brands fa-youtube"
                style={{ color: "#e00022" }}
              />{" "}
              Media Player
            </h2>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              perspiciatis natus illum dignissimos. Ut saepe laboriosam omnis
              vero reiciendis non, in, accusantium rem harum delectus ab qui nam
              vitae excepturi.
            </p>
            <div className="d-grid">
              <Link to={"/login"} className="btn btn-success">
                Let's Go
              </Link>
            </div>
          </Col>
          <Col className="py-4" sm={12} md={6}>
            <img
              src="https://img.freepik.com/free-vector/web-video-media-player-interface-template_1017-23411.jpg"
              alt=""
            />
          </Col>
        </Row>
      </div>
      <div className="container-fluid mt-5">
        <h3 className="my-3 text-center">Features</h3>
        <div className="p-4 d-flex justify-content-around">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"200px"}
              src="https://static.vecteezy.com/system/resources/previews/015/110/826/original/3d-illustration-of-upload-video-on-cloud-png.png"
            />
            <Card.Body>
              <Card.Title>Upload Youtube Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"200px"}
              src="https://png.pngtree.com/png-clipart/20230802/original/pngtree-video-icons-cinema-label-illustration-vector-png-image_9389920.png"
            />
            <Card.Body>
              <Card.Title>Add Categories</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"200px"}
              src="https://img.freepik.com/premium-vector/video-player-template-design-mockup-live-stream-window-player-social-media-concept_57312-203.jpg"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="p-5">
        <Row>
          <Col className="p-5" sm={12} md={6}>
            <h4>Simple And Faster</h4>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col className="p-5" sm={12} md={6}>
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/SqcY0GlETPk"
              title="React Tutorial for Beginners"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Landing;
