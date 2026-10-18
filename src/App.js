import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import video from './Assets/april-video.mp4'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="box">
          <div className="round">
            <br />

            <div className="about">A little About Me!</div>
            <div className="abouttext">Hi, I'm April!</div>
            <div className="lit">25 | 🇦🇺 | ♀ </div>

            <div className="abouttext">
              I'm a digital artist for around 10+ years!
              <br />
              I like to create kemono furry artworks, as well as draw and rig
              Live2D Vtuber models!
              <br />
              You can view all my models{" "}
              <a href="https://www.deviantart.com/shinyprowl/gallery/82641450/vtubers">
                here!
              </a>
              <br />
              <br />
              I have a strong interest in collecting cute trinkets and plushtoys
              of my favourite characters.
              <br />
              I also really like blogging and ID'ing insects, specifically in
              the NSW area.
              <br />
              <br />
              I'm particular fond of spiders and beetles, especially bright and
              shiny ones, I find them most beautiful.
              <br />
              <br />
              Over time you'll most likely see this little page change and grow!
              <br />
             
             
              
              <video 
              className="aprilvideo"
              src={video}
              autoPlay
              preload="auto"
              loop

              />
              
              <br />
              <strong>🩷 Favourite Sanrio Characters</strong>
              <br />
              Wishmemell, Cinnamoroll, Hanamaruobake, Usahana, Sugarbunnies and
              littleforestfellow!
              <br />
              <br />
              <strong>🐾 Favourite Pokemon</strong>
              <br />
              <a href="https://www.dragonflycave.com/favorite-list/?favs=K7NkGqI7GmLBISOLAiCsI8">
                View here
              </a>
              <br />
              <br />
              <strong>🐛 Favourite Insects</strong>
              <br />
              Flower crab spider, Orchid mantis, Christmas beetle
            </div>
            <div className="thank">
              This is my first ever website mini-project!
              <br /> Thank you{" "}
              <span className="ves">
                <strong>Vesnea!</strong>
              </span>{" "}
              for helping me set this up and teaching me.
              <br />
              this wouldn't be possible without her!
              <br />
              Please check out her{" "}
              <a href="https://seavalanche.github.io/">website!</a>
            </div>

            <br />
            {/* <button className='button'><a href='https://x.com/shinyprowl'>Twitter</a></button> */}
            <br />
            <br />
            <div className="image"></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
