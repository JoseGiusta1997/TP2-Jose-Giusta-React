import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="informacion">  
        Telefono: 3492618749 <br />
        Direccion: Avenida Santiago W 9178 <br />
      </h1>
      <button onClick={() => navigate("/")}>Volver a Home</button>
    </div>
  );
};

export default ContactPage;
