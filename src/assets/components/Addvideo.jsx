import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { AddVideos } from "../services/AllApis";
import { toast } from "react-toastify";

function Addvideo({ response }) {
  const [show, setShow] = useState(false);
  const [video, SetVideo] = useState({
    videoId: "",
    title: "",
    imageUrl: "",
    videoUrl: "",
  });

  const handleUpload = async () => {
    console.log(video);
    const { videoId, title, imageUrl, videoUrl } = video;

    if (!videoId || !title || !imageUrl || !videoUrl) {
      // alert("Please enter valid input!!");
      toast.warning("Please enter valid input!!");
    } else {
      try {
        const vurl = videoUrl.split("v=")[1];
        // console.log(vurl);
        const eurl = `https://www.youtube.com/embed/${vurl}?si=uIEpOcLM39rIGKQJ&autoplay=1`;
        // console.log(eurl);
        video.videoUrl = eurl;

        const res = await AddVideos(video);
        console.log(res);
        if (res.status == 201) {
          // alert("Upload Successfull!");
          toast.success("Upload Successfull!");
          handleClose();
          response(res);
        } else {
          // alert("Upload Failed");
          toast.error("Upload Failed");
        }
      } catch (err) {
        console.log(err);
        // alert("Upload Failed");
        toast.error("Upload Failed");
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    SetVideo({
      videoId: "",
      title: "",
      imageUrl: "",
      videoUrl: "",
    });
  };

  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn " onClick={handleShow}>
        <i
          className="fa-solid fa-circle-plus fa-2x"
          style={{ color: "#FFD43B" }}
        />
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingId"
            label="Video ID"
            className="mb-3">
            <Form.Control
              type="number"
              placeholder="1"
              onChange={(e) => {
                SetVideo({ ...video, videoId: e.target.value });
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="vtitle"
            label="Video Title"
            className="mb-3">
            <Form.Control
              type="text"
              placeholder="title"
              onChange={(e) => {
                SetVideo({ ...video, title: e.target.value });
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="imageurl"
            label="Video Image URL"
            className="mb-3">
            <Form.Control
              type="text"
              placeholder="url"
              onChange={(e) => {
                SetVideo({ ...video, imageUrl: e.target.value });
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="vurl"
            label="Youtube Video URL"
            className="mb-3">
            <Form.Control
              type="text"
              placeholder="url"
              onChange={(e) => {
                SetVideo({ ...video, videoUrl: e.target.value });
              }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addvideo;
