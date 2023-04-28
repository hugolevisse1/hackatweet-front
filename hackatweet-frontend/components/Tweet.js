import styles from "../styles/Tweet.module.css";
import profilepic from '../images/profilepic.jpg'

function Tweet() {
  return (
    <div>
      <div>
        <img src={profilepic}/>
        <p>Name</p>
        <p>Username</p>
      </div>
      <div>
        <p>
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
        </p>
      </div>
    </div>
  );
}

export default Tweet;
