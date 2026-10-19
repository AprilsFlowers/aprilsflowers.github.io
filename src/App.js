import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import video from "./Assets/april-video.mp4";
import snowy from "./Assets/snowy.mp4";
import jitters from "./Assets/jitters.mp4";
import aprilshowcase from "./Assets/aprilshowcase.mp4";
import aprilwave from "./Assets/aprilwave.png";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="round">
          <br />

          <div className="about">A little About Me!</div>
          <div className="hello">Hi, I'm April!</div>
          <div className="pronouns">
            She / her / thingamajig / whatchamacallit
          </div>
          <div className="lit">25 | 🇦🇺 | ♀ </div>
          <div className="aprilwave"></div>

          <div className="abouttext">
            <div className="bio">
            I'm a digital artist for around 10+ years!
            <br />
            I like to create kemono furry artworks, as well as draw and rig
            Live2D Vtuber models!
            <br />
            <br />
            I have a strong interest in collecting cute trinkets and plushies of
            my favourite characters.
            <br />
            I have a huge collection of Cinnamoroll, Kirby, and Sylveon taking
            over my room.
            <br />
            <br />
            I also really like blogging and ID'ing insects, specifically in the
            NSW area.
            <br />
            I'm particular fond of spiders and beetles, especially bright and
            shiny ones, I find them most beautiful.
            <br />
            <br />
            I decided to start this project because I wanted a place where I can
            have all my information in one place, as well as share some things
            about me!
            </div>
            <video
              className="aprilvideo"
              src={video}
              autoPlay
              preload="auto"
              loop
            />
            <br />
            <div className="favsbar"><strong>Favourites!</strong></div>
            <div className="favourites">
              
              <strong>Favourite Sanrio Characters</strong>
              <br />
              Wishmemell, Cinnamoroll, Hanamaruobake, Usahana, Sugarbunnies and
              littleforestfellow!
              <br />
              <br />
              <strong>Favourite Pokemon</strong>
              <br />
              Sylveon, Buneary, Minccino, Alcremie, Indeedee, Gastrodon, Goodra,
              Audino, Clefairy, Cleffa, Meowscarada, Floragato
              <br />
              <br />
              <strong>Favourite Insects</strong>
              <br />
              Flower crab spider, Orchid mantis, Christmas beetle, Click
              beetles, Cicadas
              <br />
              <br />
              <strong>Favourite Genres</strong>
              <br />
              Metal, Numetal, Industrial Metal, Punk, Breakcore, Gabba,
              Vocaloid, Videogames OSTs
              <br />
              <br />
              <strong>Favourite Artists</strong>
              <br />
              Seether, Three Days Grace, The Offspring, Maneskin, Limp Bizkit,
              Nirvana, Linkinpark, Rammstein, System Of A Down, The Prodigy,
              Stomachbook, Kikuo, Nashimoto-P
              <br />
            </div>
            <br />
            <br />
            <hr />
            <br />
            <div className="live2d">
              <strong>Live2D</strong>
            </div>
            <br />
            Live2D models are one of the most popular ways that Vtubers show
            themselves online!
            <br />
            They can be drawn in many applications, but the magic (rigging)
            happens most commonly on a program called{" "}
            <strong>Live2D Cubism</strong>.
            <br />
            <br />I first begun my Live2D journey around 2021.
            <br />
            I joined in on my friends making PNGtubers and I thought it was the
            coolest thing ever!
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
            My models show a variety of features such as toggle-able emotes, bouncy 3D physics, and
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
            <br />
            <br />
            <hr />
          </div>

          <br />
          <div className="thank">
            This is my first ever website!
            <br /> Thank you{" "}
            <span className="ves">
              <strong>Vesnea!</strong>
            </span>{" "}
            <br />
            she helped me set this up, taught me, helped me, and is there when I
            break everything!
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
    </Router>
  );
}

export default App;
