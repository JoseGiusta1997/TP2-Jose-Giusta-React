import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Direccion incorrecta</h1>
      <p> Favor de dirigirse a / ; /about , /contact , /detail/:id , /category/:categoryId </p> 
      <p> O sera direccionado al home a la brevedad </p> 
      
    </div>
  );
};

export default ErrorPage;
