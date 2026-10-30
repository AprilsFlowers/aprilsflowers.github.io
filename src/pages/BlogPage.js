import "../styles/BlogPage.css";
import { Link } from "react-router-dom"; // Make sure this exact line is here!

function blog() {
  return (
    <div className="blog">
      <ul>
        <li>
          <a href="https://www.youtube.com/@shinyprowl/videos">Youtube</a>
        </li>
        <li>
          <a href="https://www.deviantart.com/shinyprowl">DeviantArt</a>
        </li>
        <li>
          <a href="https://bsky.app/profile/shinyprowl.bsky.social">Bluesky</a>
        </li>
        <li>
          <a href="https://x.com/shinyprowl">Twitter</a>
        </li>
        <li>
          <a href="https://vgen.co/Shinyprowl">Commissions</a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div className="banner"></div>
      <div className="maincontainer">
        <div className="blogintro">Welcome to my Blog!</div>
        <div className="blogabout">
          This is where I'll ramble to my hearts content!
          <br />I love to write and let any thoughts I have out, so this is
          where I will store them!
        </div>
        <div className="aprilpeekimage"></div>
        <div className="blogscrollcontainer">
          <div className="blogentry">
            <h1>My First Blog!</h1>
            <br />
            <div className="entrydate">30th of October, 2026</div>
            <p>
              This is my very first blog entry!
              <br />
              Sweetest Vesnea helped a ton with helping me make and link new
              pages together
              <br />
              so big shout out to her for being there for me! 🩷
              <br />
              <br />
              I'm glad I have this little area now to organize any thoughts or
              word dumps I have, as well as just have my own space.
              <br />
              <br />
              Not sure what kind of stuff I'll write quite yet, but I'm proud of
              this so far!
              <br />
              <br />
              Every new blog post I make is auto chronological, so I can type
              and code going down, whilst new entries automatically send
              themselves to the top!
            </p>
          </div>

          <div className="blogentry">
            <h1>Blog: Electric Boogaloo</h1>
            <br />
            <div className="entrydate">30th of October, 2026</div>
            <p>
              Here I am already testing out the column reverse feature!
              <br />
              This is my newest blog~
              <br />
              <br />
              I'm so glad I have this web-page project to work on in-between my
              Live2D works!
              <br />
              It's really nice having multiple creative outlets, so if one thing
              burns me out, I can hop to another!
              <br />
              <br />
              Once I'm done with my Live2D commissions I'll definitely find time
              to make my own original models again just for fun and practice!
            </p>
            <br />
            <br />
            <br />
          </div>

          <div className="blogentry">
            <h1>It was April's Birthday!</h1>
            <br />
            <div className="entrydate">30th of October, 2026</div>
            <p>
              On October 27th, April was first designed!
              <br />
              She was originally drawn as a Live2D model, but I grew so attached
              that I made her my new fursona.
              <br />
              Her calm colours were very intentional compared to my old bright
              pink fursona.
              <br />
              Green was also chosen as the accent colour due to the flower I use
              to represent her, which is the flannel flower.
              <br />
              Green is also just a nice relaxing colour.
              <br />
              I wanted to give her a soft and calm look, and I think I did a
              good job of it!
              <br />
              I'll find time to make some new art of her to celebrate her
              turning 1 year old today! I can't believe it's already been 1
              year!
              <br />
              April is very special to me, so I want to pour some time into
              giving her some nice art~
            </p>
            <br />
            <br />
            <br />
          </div>
          <div className="blogentry">
            <h1>Thanks Ves!</h1>
            <br />
            <div className="entrydate">30th of October, 2026</div>
            <p>
              This page has a little more personality now!
              <br />
              Thanks to Vesnea for surprising me with some adorable art for
              April's Birthday!
              <br />
              <br />
              This page still needs a lot of work but in about, so far, 2 weeks
              since this project started? So much has been done!
              <br />
              Never did I ever expect to wake up and and go "wow I really want
              to stare at a bunch of code all day".
              <br />
              But to watch this slowly come to life has been amazing, and it's
              an awesome skill to learn!
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="endtext">You've reached the end!</div>
      </div>
    </div>
  );
}

export default blog;
