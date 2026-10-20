import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import video from "./Assets/april-video.mp4";
import snowy from "./Assets/snowy.mp4";
import jitters from "./Assets/jitters.mp4";
import aprilshowcase from "./Assets/aprilshowcase.mp4";
import blossom from "./Assets/blossom.mp4";
import mystic from "./Assets/mystic.mp4";
import yui from "./Assets/yui.mp4";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="round">
          <br />

          <div className="greeting">Hi, I'm April!</div>
          <div className="pronouns">
            She / her / thingamajig / whatchamacallit
          </div>
          <div className="lit">25 | 🇦🇺 | ♀ </div>
          <div className="aprilwave"></div>

          <div className="aboutbar">About Me!</div>

          <div className="abouttext">
            <div className="bio">
              I'm a digital artist for around 10+ years!
              <br />
              I like to create kemono furry artworks, as well as draw and rig
              Live2D Vtuber models!
              <br />
              <br />
              I have a strong interest in collecting cute trinkets and plushies
              of my favourite characters.
              <br />
              I have a huge collection of Cinnamoroll, Kirby, and Sylveon taking
              over my room.
              <br />
              <br />
              I also really like blogging and ID'ing insects, specifically in
              the NSW area.
              <br />
              I'm particular fond of spiders and beetles, especially bright and
              shiny ones, I find them most beautiful.
              <br />
              <br />I decided to start this project because I wanted a place
              where I can have all my information in one place, as well as share
              some things about me!
            </div>
            <br />

            <video
              className="aprilvideo"
              src={video}
              autoPlay
              preload="auto"
              loop
            />
            <br />

            <div className="favsbar">
              <strong>Favourites!</strong>
            </div>
          </div>
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
            Flower crab spider, Orchid mantis, Christmas beetle, Click beetles,
            Cicadas
            <br />
            <br />
            <strong>Favourite Genres</strong>
            <br />
            Metal, Numetal, Industrial Metal, Punk, Breakcore, Gabba, Vocaloid,
            Videogames OSTs
            <br />
            <br />
            <strong>Favourite Artists</strong>
            <br />
            Seether, Three Days Grace, The Offspring, Maneskin, Limp Bizkit,
            Nirvana, Linkinpark, Rammstein, System Of A Down, The Prodigy,
            Stomachbook, Kikuo, Nashimoto-P
            <br />
          </div>
          <div className="abouttext">
            <br />
            <br />
            <hr />
            <br />
            <div className="live2dbar">
              <strong>Live2D</strong>
            </div>
            <br />
            <div className="live2dheader">
              <strong>What is Live2D?</strong>
            </div>
            Live2D models are one of the most popular ways that Vtubers show
            themselves online!
            <br />
            They can be drawn in many applications, but the magic (rigging)
            happens most commonly on a program called
            <br />
            <div className="live2dcubism">
              <a href="https://www.live2d.com/en/" className="live2d-link">
                <strong>Live2D Cubism</strong>
              </a>
            </div>
            <br />
            This program allows you to manipulate individual layers of your
            artworks, letting you create the illusion of 3D movement.
            <br />
            Pair that technology with a face-tracking app like Vtube Studio and
            you now have a Vtuber!
            <br />
            <br />
            <br />
            <div className="live2dheader">
              <strong>My Journey</strong>
            </div>
            I first begun my Live2D journey around 2021.
            <br />
            I joined in on my friends making PNGtubers and I thought it was the
            coolest thing ever!
            <br />
            I decided I wanted even more control, thus my first ever Live2D
            project was born.
            <br />
            <br />
            I love Live2D because it's amazing being able to see my art come to
            life and even being able to control it! I found that idea so cool.
            <br />
            Being able to bring other people's characters to life is very fun
            also.
            <br />
            Usually someone is either an artist or rigger. It's not common to
            see someone be able to do both, so having both skills is special to
            me!
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

              <video
                className="showcase"
                src={yui}
                autoPlay
                preload="auto"
                loop
                muted
              />

              <video
                className="showcase"
                src={blossom}
                autoPlay
                preload="auto"
                loop
                muted
              />

              <video
                className="showcase"
                src={mystic}
                autoPlay
                preload="auto"
                loop
                muted
              />
            </div>
            My models show a variety of features such as toggle-able emotes,
            bouncy 3D physics, and even hand-tracking!
            <br />I try to learn new features and techniques with every new
            model I create.
            <br />
            <br />
            Commission Info ⇢
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
          </div>

          <hr />
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

      <footer>
        <p>© 2026 April</p>
      </footer>
    </Router>
  );
}

export default App;
