import axios from "axios";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { deleteVideo, addHistory } from "../services/AllApis";
import { toast } from "react-toastify";

function VideoCard({ video, response }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const dt = new Date();
    const data = {
      videoId: video.videoId,
      title: video.title,
      url: video.videoUrl,
      datetime: dt,
    };
    console.log(data);
    const result = await addHistory(data);
    console.log(result);
  };

  const handleDelete = async () => {
    const res = await deleteVideo(video.id);

    if (res.status == 200) {
      toast.success("Video Deleted!!");
      response(res);
    } else {
      toast.error("Deletion Failed!!");
    }
  };

  const dragHandler = (e) => {
    console.log(e);
    console.log(video);

    e.dataTransfer.setData("video", JSON.stringify(video));
  };

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="mb-3"
        onDragStart={(e) => {
          dragHandler(e);
        }}
        draggable>
        <Card.Img
          onClick={handleShow}
          style={{ cursor: "pointer", height: "150px", objectFit: "cover" }}
          variant="top"
          src={video?.imageUrl}
        />
        <Card.Body>
          <Card.Title>{video?.title}</Card.Title>

          <Button className="btn" variant="tertiary" onClick={handleDelete}>
            <i className="fa-solid fa-trash-can" style={{ color: "#bd0000" }} />
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="489"
            src={video?.videoUrl}
            title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VideoCard;
