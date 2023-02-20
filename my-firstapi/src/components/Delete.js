import axios from "axios";
import React, { useEffect, useState } from "react";

const Delete = () => {
    const [value, setValue] = useState();
    const inputChange = (e) => {
        setValue(e.target.value);
    }

  const deleteHandler = (e) => {
    e.preventDefault();


    axios
      .delete("https://reqres.in/api/users/3")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <form onSubmit={deleteHandler} >
            <input type="number" value={value} onChange={inputChange}  />
            <button type="submit" >Delete</button>
        </form>
        
    </div>
  );
};

export default Delete;
