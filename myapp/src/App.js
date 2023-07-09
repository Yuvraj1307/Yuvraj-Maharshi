// import logo from './logo.svg';
import './App.css';
import MultimediaContainer from './components/Mmc';
// import imgs from "./images/Screenshot (32).png"

function App() {
  return (
    <div className="App">
      <MultimediaContainer media={"https://biteable.com/wp-content/uploads/2023/04/static-assets/project-ruby/biteable-homepage-explainer-14.mp4"} />
    </div>
  );
}

export default App;
