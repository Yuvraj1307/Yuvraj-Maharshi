import React, { useState } from 'react';
import '../style/MultimediaContainer.css';  
const SpecialBox = ({ media }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [{impval,submitedval},setLink]=useState({impval:"",submitedval:""})
 
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSubmit=()=>{
        setLink({impval,submitedval:impval})
  }

  return (
    <div className="container">
      <div className="box">
        {submitedval && (
          <div className="media-wrapper">
            {typeof submitedval === 'string' && submitedval.endsWith('.mp4') ? (
              <video className="media" src={submitedval} autoPlay muted loop />
            ) : (
              <img className="media" src={submitedval} alt="Media" />
            )}
          </div>
        )}
        <div className="favorite" onClick={toggleFavorite}>
          {isFavorite ? '❤️' : '⭐️'}
        </div>
      </div>
      <div className="title"><h3>Multimedia Viewer </h3><input onChange={(e)=>{setLink({impval:e.target.value,submitedval:submitedval})}} className='imp' placeholder='Provide your URL here' /><button onClick={handleSubmit}>submit</button></div>
    </div>
  );
};

export default SpecialBox;































// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import '../style/MultimediaContainer.css';  
// import imgs from "../images/Screenshot (32).png"
// const MultimediaContainer = () => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleFavoriteClick = () => {
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <div className="container">
//       <div className="media-container">
//         <div className="favorite-icon" onClick={handleFavoriteClick}>
//           <FontAwesomeIcon icon={faHeart} color={isFavorite ? 'red' : 'gray'} />
//         </div>
//         {/* Replace the 'media' element with your image, GIF, or video */}
//         <div className="media">
//           <img src={imgs} alt="Media" />
//         </div>
//         <div className="media">
//           <img src={imgs} alt="Media" />
//         </div>
//       </div>
//       <div className="dummy-title">
//         <h2>Dummy Title</h2>
//       </div>
//     </div>
//   );
// };

// export default MultimediaContainer;