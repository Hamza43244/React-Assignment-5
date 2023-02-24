import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SmCard from "../components/card";
import Card from "../components/card";

const Todos = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      
      <Container>
        <h1 className="text-center text-success" >Todos Api</h1>
        <div className="row">
          {data.map((e, i) => {
            return (
              <div className=" my-2 col-3">
                <SmCard height={"200px"} key={i} id={e.id} title={e.title} />  
              </div>
            );
          })}
        </div>
      </Container>
      
    </div>
  );
};

export default Todos;
