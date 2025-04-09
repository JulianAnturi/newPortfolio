import stars from '../../assets/stars.png'
import clouds from '../../assets/clouds.png'
import './CloudsNStars.css';

const CloudsNStars = ({children})=>{
  return (
    <>
    <div className="stars" style={{ backgroundImage: `url(${stars})` }}></div>
    <div className="clouds" style={{ backgroundImage: `url(${clouds})` }}> 
    {children}

    </div>
    </>
  )
}
export default CloudsNStars;
