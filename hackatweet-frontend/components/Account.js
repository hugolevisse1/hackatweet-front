import styles from "../styles/Account.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Tweet from "./Tweet";

function Account() {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.leftSide}>
        <FontAwesomeIcon
          className={styles.logoHome}
          icon={faTwitter}
          size="lg"
          rotation={180}
          style={{ color: "#ffffff" }}
        />
      </div>
      <div className={styles.middle}>
        <div className={styles.postTweet}>
          <h3>Home</h3>
          <textarea
            className={styles.tweetBox}
            type="text"
            placeholder="What's on your mind..."
            id="tweet"
          ></textarea>
        </div>
        <Tweet/>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}

export default Account;
