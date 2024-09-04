import React, { useEffect, useState } from "react";
import { getHistory, deleteHistory } from "../services/AllApis";

function History() {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getHistory();
    console.log(result);
    if (result.status == 200) {
      setHistoryList(result.data);
      console.log(result.data);
    } else {
      console.log(result);
    }
  };

  const handleDelete = async (id) => {
    const res = await deleteHistory(id);
    console.log(res);
    if (res.status == 200) {
      getData();
    }
  };

  return (
    <>
      <div className="p-5">
        <h1>Watch History</h1>
        {historyList.length > 0 ? (
          <table
            className="table table-bordered "
            style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>Video ID</th>
                <th>Title</th>
                <th>Video URL</th>
                <th>Date and Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {historyList.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.url}</td>
                  <td>{item.datetime}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => {
                        handleDelete(item.id);
                      }}>
                      <i
                        className="fa-solid fa-trash-can"
                        style={{ color: "#bd0000" }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>No History Available</h2>
        )}
      </div>
    </>
  );
}

export default History;
