import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [char, setChar] = useState({});
  let { id } = useParams();


  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((json) =>
      setChar(json.data)
    ).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 120 }}>
      <h1 className="descripcion">
      Descripcion: <br />
      {char.description}
      </h1>
      <h2 className="descripcion2"> 
      {char.id ? <CardUser char={char}  /> : null}
      </h2>
    </div>
  );
};

export default DetailPage;
