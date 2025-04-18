import { useNavigate } from 'react-router-dom'
import "./Content.css";
const Content =  ()=>{
  
 const navigate   = useNavigate();
  return (
      <div className="content">
        <h1>Bienvenido a mi portafolio</h1>
        <button onClick={()=>navigate('/portfolio')}>Ver proyectos</button>
      </div>
  )
}
export default Content;
