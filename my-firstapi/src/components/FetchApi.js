import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchApi = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
    .get("https://reqres.in/api/users")
    .then((res) => {
      console.log(res.data.data)
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const deleteHandler = (id) => {
    console.log(id);
    axios.delete(`https://reqres.in/api/users/${id}`)
    .then((res) => {
        // getUsers();
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
  }



//   console.log(data);
  return (
    <>
      {data &&
        data.map((e) => {
          return (
            <div style={{border:"1px solid red", width:"500px", margin:"20px"}} >
              <h1>{e.id}</h1>
              <h1>{e.email}</h1>
              <h1>{e.first_name}</h1>
              <h1>{e.last_name}</h1>
              <img src={e.avatar} style={{width:"120px"}} />
              <br />
              <button onClick={() => deleteHandler(e.id)} >delete</button>
            </div>
          );
        })}
    </>
  );
};

export default FetchApi;
