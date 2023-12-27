import { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";
import "./ListUser.css";

import { Link } from "react-router-dom";

const ListUser = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setChars(res.data) 
    ).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  return (
    <div className="Cards-List">
      {chars.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <Link to={`/detail/${char.id}`} style={{ textDecoration: "none" }}>
              <CardUser char={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListUser;
