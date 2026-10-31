import "./styles/App.css";
import { Link } from "react-router-dom";
import video from "./assets/april-video.mp4";
import snowy from "./assets/snowy.mp4";
import jitters from "./assets/jitters.mp4";
import aprilshowcase from "./assets/aprilshowcase.mp4";
import blossom from "./assets/blossom.mp4";
import mystic from "./assets/mystic.mp4";
import yui from "./assets/yui.mp4";
import shinyicon from "./assets/shinyicon.png";
import mayicon from "./assets/mayicon.png";
import apriliconweb from "./assets/apriliconweb.webp";
import aprilpeek from "./assets/aprilpeek.webp";

function App() {
  return (
    <div>
      <div className="App">
        {" "}
        <ul>
          <li>
            <a href="https://www.youtube.com/@shinyprowl/videos">Youtube</a>
          </li>
          <li>
            <a href="https://www.deviantart.com/shinyprowl">DeviantArt</a>
          </li>
          <li>
            <a href="https://bsky.app/profile/shinyprowl.bsky.social">
              Bluesky
            </a>
          </li>
          <li>
            <a href="https://x.com/shinyprowl">Twitter</a>
          </li>
          <li>
            <a href="https://vgen.co/Shinyprowl">Commissions</a>
          </li>
          <li>
            <Link to="/BlogPage">Blog</Link>
          </li>
        </ul>
        <div className="banner">
          <div className="bannertext">Welcome to my Garden</div>
        </div>
        <div className="round">
          <br />

          <div className="greeting">Hi, I'm April!</div>
          <div className="pronouns">
            She / her / thingamajig / whatchamacallit
          </div>

          <div className="lit">25 | 🇦🇺 | ♀ </div>
          <div className="aprilwave"></div>
          <div className="quotes-wrapper" style={{ "--total-quotes": 5 }}>
            <div className="quotesbox" style={{ "--delay": "calc(10s * 0)" }}>
              "nya"
            </div>
            <div className="quotesbox" style={{ "--delay": "calc(10s * 1)" }}>
              "*boggles*"
            </div>
            <div className="quotesbox" style={{ "--delay": "calc(10s * 2)" }}>
              "im a cat"
            </div>
            <div className="quotesbox" style={{ "--delay": "calc(10s * 3)" }}>
              "hunfry jacks <br /> grilled chien"
            </div>
            <div className="quotesbox" style={{ "--delay": "calc(10s * 4)" }}>
              "Smells bad ❌ <br />
              Stinks good ✅" <br />
              <span
                style={{
                  color: "#ff4d4d",
                  fontSize: "0.85em",
                  display: "block",
                  marginTop: "5px",
                }}
              >
                Failed to send message. Hold for options.
              </span>
            </div>
          </div>

          <div className="aboutbar">About Me!</div>

          <div className="abouttext">
            <div className="bio">
              I'm a digital artist for around 10+ years!
              <br />
              I like to create kemono furry artworks, as well as draw and rig
              Live2D Vtuber models!
              <br />
              I also like to draw cute pokemon and other chibi characters.
              <br />
              <br />
              I have a strong interest in collecting cute trinkets and plushies
              of my favourite characters.
              <br />
              I have a huge collection of Cinnamoroll, Kirby, and Sylveon taking
              over my room.
              <br />
              The more cute, the better! I like decorating my space with
              childish items.
              <br />
              <br />
              I also really like blogging and ID'ing insects, specifically in
              the NSW area.
              <br />
              I'm particular fond of spiders and beetles, especially bright and
              shiny ones, I find them most beautiful.
              <br />
              <br />
              I sometimes imagine myself having my own little flowerbed. I love
              when I can smell flowers during the summer season, it's something
              I look forward to every year.
              <br />
              It would be lovely to watch bees and butterflies and other insects
              around it. That would be an amazing sight to see.
              <br />
              <br />
              Growing up whilst the internet was evolving really fast, I was
              raised in the era of flash! So I also find a lot of interest in
              revisiting and checking out old games I used to play!
              <br />
              I'm also just a general fan of watching anything about the weird
              oddities of how videogames functions, what glitches they had, as
              well as speedruns.
              <br />
              <br />
              My favourite console eras were the Gamecube, Wii and PS2. I have
              lots of memories of playing on those, but I currently mostly use
              PC and sometimes my Switch.
              <br />
              <br />
              <hr />
              <br />I decided to work this project because I wanted a place
              where I can be unapologetically myself, share things about me, and
              do a quick display of the stuff I do!
              <br />
              As I learn more about CSS and the ways I can make this site truly
              my own, it'll slowly evolve!
              <br />
            </div>
            <br />
            <div className="charactersbar">
              <strong>My Characters!</strong>
            </div>
            <br />
            These are my characters, I've designed them to reflect different
            parts of me.
            <br />
            April is my newest fursona, whilst Shiny is my oldest fursona.
            <br />
            Clicking the bubbles will take you to their Toyhouse page.
            <br />
            <br />
            <div className="characterscontainer">
              <div className="characterstext"></div>

              {/* 1. This parent box controls the layout and positioning of the bubbles */}
              <div className="charactersbox">
                {/* 2. Each image gets the exact same class for sizing and shaping */}
                <div className="characterbubble">
                  <a href="https://toyhou.se/35868080.april">
                    <img src={apriliconweb} alt="April" />
                  </a>
                  <div className="aprilname">
                    <strong>April</strong>
                  </div>
                  <div className="description">
                    A gentle and meek cat with an affinity for flowers. Her calm
                    demeanor is easily turned into worry at the slightest social
                    interaction.
                  </div>
                </div>

                <div className="characterbubble">
                  <a href="https://toyhou.se/38172488.may">
                    <img src={mayicon} alt="May" />
                  </a>
                  <div className="mayname">
                    <strong>May</strong>
                  </div>
                  <div className="description">
                    Childish and naive, she doesn't let anything rain on her
                    parade. She radiates friendliness wherever she goes and is
                    always down to play!
                  </div>
                </div>

                <div className="characterbubble">
                  <a href="https://toyhou.se/23921183.shiny">
                    <img src={shinyicon} alt="Shiny" />
                  </a>
                  <div className="shinyname">
                    <strong>Shiny</strong>
                  </div>
                  <div className="description">
                    A unique and unassuming blend of a rabbit and a spider. She
                    is feisty and bratty but well-meaning and cares deeply for
                    her friends.
                  </div>
                </div>
              </div>
            </div>
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
            <strong>Favourite Umas</strong>
            <br />
            Wonder Acute, Haru Urara, Still in Love, Rice Shower
            <br />
            <br />
            <strong>Favourite Insects</strong>
            <br />
            Flower crab spider, Orchid mantis, Christmas beetle, Click beetles,
            Cicadas
            <br />
            <br />
            <strong>Favourite Games</strong>
            <br />
            Roblox, Minecraft, Taiko no Tatsujin, Kirby's Epic Yarn, Mario
            Sunshine, Scribblenauts,
            <br />
            <br />
            <strong>Favourite Genres</strong>
            <br />
            Survival Co-op, Rhythm, Resource Gathering, Relaxing, Flash
            <br />
            <br />
            <strong>Favourite Artists</strong>
            <br />
            Seether, Three Days Grace, The Offspring, Maneskin, Limp Bizkit,
            Nirvana, Linkinpark, Rammstein, System Of A Down, The Prodigy,
            Stomachbook, Kikuo, Nashimoto-P
            <br />
            <br />
            <strong>Favourite Genres</strong>
            <br />
            Metal, Numetal, Industrial Metal, Punk, Breakcore, Gabba, Vocaloid,
            Videogames OSTs
            <br />
            <br />
            <strong>Favourite Songs</strong>
            <br />
            <div className="spotifylink">
              <a
                href="https://open.spotify.com/playlist/7uI3LvnmOeB8ndBUElC2JP?si=980d50eb02544e05"
                class="spotifylink"
              >
                <strong>Spotify Playlist</strong>
              </a>
            </div>
            <br />
          </div>
          <div className="abouttext">
            <br />
            <br />
            <div className="traitstext">
              <strong>Traits!</strong>
            </div>
            I wanted a unique and easy way to express my personality
            <br /> but didn't know how to show a lot in one go, so I made this
            up!
            <br />
            <br />
            <div className="traitsbox">
              <div className="traitsboxscroll">
                <div className="traitbubblesrow">
                  <div className="traitsbubbles">🍭 Playful</div>
                  <div className="traitsbubbles">🖍️ Childish</div>
                  <div className="traitsbubbles">🦜 Chatty</div>
                  <div className="traitsbubbles">🧹 Tidy</div>
                  <div className="traitsbubbles">🗃️ Organized</div>
                  <div className="traitsbubbles">🤝 Helpful</div>
                  <div className="traitsbubbles">🎨 Artistic</div>
                  <div className="traitsbubbles">🎭 Sensitive</div>
                  <div className="traitsbubbles">🩷 Lovebug</div>
                  <div className="traitsbubbles">🐚 Introvert</div>
                  <div className="traitsbubbles">⏳ Patient</div>
                  <div className="traitsbubbles">🧸 Cuddly</div>
                  <div className="traitsbubbles">🫂 Caring</div>

                  <div className="traitsbubbles">🪲 Bug-Lover</div>
                  <div className="traitsbubbles">🌷 Nature-Lover</div>
                  <div className="traitsbubbles">🍃 Carefree</div>
                  <div className="traitsbubbles">🔎 Inquisitive</div>
                  <div className="traitsbubbles">👁️‍🗨️ Nuanced</div>
                  <div className="traitsbubbles">🐈 Cat-person</div>
                  <div className="traitsbubbles">📸 Snapshotter</div>

                  <div className="traitsbubbles">👻 Camera-Shy</div>
                  <div className="traitsbubbles">🍫 Chocaholic</div>
                  <div className="traitsbubbles">☕ Coffee-Lover</div>
                  <div className="traitsbubbles">🏳️‍🌈 Loves Everyone!</div>
                  <div className="traitsbubbles">
                    🍍 Pineapple goes on everything!
                  </div>
                  <div className="traitsbubbles">💅 Sassy</div>
                  <div className="traitsbubbles">🖥️ Chronically Online</div>
                  <div className="traitsbubbles">🔮 Overthinker</div>
                  <div className="traitsbubbles">🔥 Rancorous</div>
                  <div className="traitsbubbles">🎺 Annoying</div>
                  <div className="traitsbubbles">🧱 Tactless</div>
                  <div className="traitsbubbles">🐌 Slow</div>
                  <div className="traitsbubbles">🍔 Gourmand</div>

                  <div className="traitsbubbles">🦥 Lazy</div>
                  <div className="traitsbubbles">💤 Sleepy</div>
                  <div className="traitsbubbles">❓ Forgetful</div>
                  <div className="traitsbubbles">
                    🌏 Geographically-Challenged
                  </div>
                  <div className="traitsbubbles">🌀 Easily-Confused</div>
                </div>{" "}
              </div>
            </div>
            <br />
            <br />
            <div className="live2dvideobanner">
              <video src={snowy} autoPlay preload="auto" loop muted />
              <div className="live2dbannertext">Live 2D</div>
            </div>
            {/* <div className="live2dbar">
                <strong>Live2D</strong>
              </div>
              <br /> */}
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
            <hr />
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
            <div className="commissioninfo">
              Commission Info ⇢
              <div className="vgen">
                <a href="https://vgen.co/Shinyprowl" class="vgen">
                  https://vgen.co/Shinyprowl
                </a>
              </div>
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
            <br />
            <hr />
          </div>

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
    </div>
  );
}

export default App;
