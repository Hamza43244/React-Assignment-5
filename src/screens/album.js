import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SmCard from '../components/card';

const Album = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
    <h1 className="text-center text-success" >Photos</h1>
    <div className="row">
      {data.map((e, i) => {
        return (
          <div className=" my-2 col-3">
            <SmCard height={"400px"} key={i} id={e.id} title={e.title} body={e.body} />  
          </div>
        );
      })}
    </div>
  </Container>
  )
}

export default Album;


