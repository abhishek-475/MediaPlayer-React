import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { AddCategory } from "../services/AllApis";
import CategoryList from "./CategoryList";

function Category() {
  const [show, setShow] = useState(false);
  const [category, SetCategory] = useState({
    categoryId: "",
    title: "",
    videos: [],
  });

  const [addResponse, setAddResponse] = useState("");

  const handleCategory = async () => {
    console.log(category);
    const { categoryId, title } = category;
    if (!categoryId || !title) {
      toast.warning("Enter valid Inputs!!");
    } else {
      const result = await AddCategory(category);
      console.log(result);
      if (result.status == 201) {
        toast.success("Category Added!!");
        setAddResponse(result);
        handleClose();
        SetCategory({
          categoryId: "",
          title: "",
          videos: [],
        });
      } else {
        toast.error("Category Adding Failed!!");
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-grid">
        <button className="btn btn-outline-warning" onClick={handleShow}>
          Add to Category
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Catogeries</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId="floatingID"
              label="Category ID"
              className="mb-3">
              <Form.Control
                type="number"
                placeholder="1"
                onChange={(e) =>
                  SetCategory({ ...category, categoryId: e.target.value })
                }
              />
            </FloatingLabel>
            <FloatingLabel controlId="vtitle" label="Category Title">
              <Form.Control
                type="text"
                placeholder="title"
                onChange={(e) =>
                  SetCategory({ ...category, title: e.target.value })
                }
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleCategory}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <CategoryList response={addResponse} />
      </div>
    </>
  );
}

export default Category;
