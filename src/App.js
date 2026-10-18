import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import video from "./Assets/april-video.mp4";
import snowy from "./Assets/snowy.mp4";
import jitters from "./Assets/jitters.mp4";
import aprilshowcase from "./Assets/aprilshowcase.mp4";

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
              <br />
              <br />
              <hr />
              <div className="live2d">
                <strong>Live2D</strong>
              </div>
              <br />I first begun my Live2D journey around the{" "}
              <strong>20th of March 2021</strong>
              <br />
              I joined in on my friends making PNGtubers and I thought it was
              the coolest thing ever!
              <br />
              <br />
              I decided I wanted even more control, thus my first ever Live2D
              project was born.
              <br />
              <br />
              Here's a small look at some of the models I've created!
              <div className="video-container">
                <video
                  className="showcase"
                  src={snowy}
                  autoPlay
                  preload="auto"
                  loop
                  muted
                />
                <video
                  className="showcase"
                  src={jitters}
                  autoPlay
                  preload="auto"
                  loop
                  muted
                />
                <video
                  className="showcase"
                  src={aprilshowcase}
                  autoPlay
                  preload="auto"
                  loop
                  muted
                />
              </div>
              My models show a variety of features such as emotes, physics, and
              even hand-tracking!
              <br />I try to learn new features and techniques with every new
              model I create.
              <br />
              <br />
              You can view commission information at
              <br />
              <div className="vgen">
                <a href="https://vgen.co/Shinyprowl" class="vgen">
                  https://vgen.co/Shinyprowl
                </a>
              </div>
              <br />
              You can also view all of my models on Youtube!
              <div className="youtube">
                <a
                  href="https://www.youtube.com/@shinyprowl/videos"
                  class="youtube"
                >
                  View Showcases
                </a>
              </div>
            </div>
            <br />

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
