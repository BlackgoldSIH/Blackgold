import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./card.css";
import axios from "axios";

const baseURL = "127.0.0.1";

function ProjectCards({ item }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchState, setSearchState] = useState(""); // Search bar state

  useEffect(() => {
    // Fetch data from API
    const getData = async () => {
      try {
        const response = await axios.get(`http://${baseURL}:8000/api/accounts/projects/${item.id}/`);
        setData(response.data.data);
        setFilteredData(response.data.data); // Initialize filtered data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [item.id]);

  useEffect(() => {
    // Filter data based on searchState and project title
    if (searchState) {
      const filtered = data.filter((project) =>
        project.title?.toLowerCase().includes(searchState.toLowerCase()) // Filter by title
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Reset to original data if searchState is empty
    }
  }, [searchState, data]);

  return (
    <div className="container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search projects by title..."
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)} // Update search state
        />
      </div>

      {/* Project Cards */}
      <div className="projects_cards">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <Card key={index} data={item} />)
        ) : (
          <p>No matching projects found.</p>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;
