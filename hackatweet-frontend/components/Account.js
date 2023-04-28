import styles from "../styles/Account.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Tweet from "./Tweet";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

function Account() {
  const user = useSelector((state) => state.user.value);
  const username = user.username;
  const token = user.isConnected;
  const [tweet, setTweet] = useState("");

  const handleTweet = () => {
    fetch("https://hackaton-two.vercel.app/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        username,
        tweet,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

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
        <div className={styles.bottomLeftUser}>
          <div className={styles.user}>
            <Image
              src="/images/profilepic.jpg"
              alt="profile pic"
              width={40}
              height={40}
            />
            <h4>Spongebob</h4>
            <p>@squarepants</p>
          </div>
          <button>Logout</button>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.postTweet}>
          <h3>Home</h3>
          <textarea
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            className={styles.tweetBox}
            type="text"
            placeholder="What's on your mind..."
            id="tweet"
          ></textarea>
          <button onClick={handleTweet}>Tweet</button>
        </div>
        <Tweet />
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}

export default Account;
