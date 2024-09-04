import React, { useEffect, useState } from "react";
import {
  deleteCategory,
  getCategory,
  updateCategory,
} from "../services/AllApis";
import { toast } from "react-toastify";
import VideoCard from "./VideoCard";

function CategoryList({ response }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getData();
  }, [response]);

  const getData = async () => {
    const result = await getCategory();
    console.log(result);
    if (result.status == 200) {
      setCategoryList(result.data);
    }
  };

  const handleDelete = async (id) => {
    const res = await deleteCategory(id);
    console.log(res);
    getData();
  };

  const drophandler = async (e, category) => {
    console.log("dropped");
    const vid = JSON.parse(e.dataTransfer.getData("video"));

    category.videos.push(vid);
    const result = await updateCategory(category.id, category);
    console.log(result);
    if (result.status == 200) {
      toast.success(`${vid.title} video added to ${category.title}`);
      getData();
    } else {
      toast.error("Video-Category adding Failed");
    }
  };

  const dragOverHandler = (e) => {
    console.log("dropping over");
    e.preventDefault();
  };

  return (
    <>
      <div className="container-fluid border border-3 border-light p-2 mt-3">
        {categoryList.length > 0 ? (
          <div>
            {categoryList.map((item) => (
              <div className="border m-1">
              <div
                className=" p-3 mb-3  d-flex justify-content-between"
                onDragOver={(e) => {
                  dragOverHandler(e);
                }}
                onDrop={(e) => {
                  drophandler(e, item);
                }}>
                <h3>{item.title}</h3>
                <button className="btn" onClick={() => handleDelete(item.id)}>
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "#bd0000" }}
                  />
                </button>
              </div>
              <div className="border border-light">
                {
                  item?.videos?.length > 0 &&
                  <>
                  {item?.videos?.map((vid) =>(
                    <VideoCard video={vid} cat={true}/>
                  ))}
                  </>
                }
              </div>
              </div>

            ))}
          </div>
        ) : (
          <h5>No Categories</h5>
        )}
      </div>
    </>
  );
}

export default CategoryList;
