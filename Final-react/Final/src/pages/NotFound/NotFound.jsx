import { useNavigate } from "react-router-dom"


export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
        <h1>Página não encontrada</h1>
        <button onClick={() => navigate("/login")}>Voltar para a Home</button>
    </div>
  )
};

