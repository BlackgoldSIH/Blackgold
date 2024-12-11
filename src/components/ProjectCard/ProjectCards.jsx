import React, { useEffect } from "react";
import Card from "./Card";
import "./card.css";
import { useState } from "react";
import axios from "axios";
const baseURL = "127.0.0.1"

function ProjectCards(item) {

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://${baseURL}:8000/api/accounts/projects/${item.item.id}/`);

        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
    
  }, []);

  return (
    <div className="container">
      <div className="projects_cards">
        {data.map((item,index) =>(
          <Card key={index} data={item}/>
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;
