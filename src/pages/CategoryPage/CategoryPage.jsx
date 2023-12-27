import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const CategoryPage = () => {
  const [chars, setChars] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setChars(res.data)
    ).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  let filteredCharacters = chars.filter((char) => {
    return char.category === categoryId;
  });

  return (
    <div className="Cards-List">
      {filteredCharacters.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <CardUser char={char} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
