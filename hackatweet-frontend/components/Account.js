import styles from "../styles/Account.module.css";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Tweet from "./Tweet";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { logout } from "../reducers/user";

function Account() {
  const user = useSelector((state) => state.user.value);
  const username = user.username;
  const token = user.isConnected;
  const firstname = user.firstname;
  const [tweet, setTweet] = useState("");
  const [verif, setVerif] = useState(false)

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, []);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  let msgData = []

  const msg = msgData.map((data, i) => {

    return <Tweet key={i} firstname={data.firstname} username={data.username} tweet={data.tweet}/>;
  });


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
        if(data.result){
          setVerif(true)
        }
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
        <div>
          <div className={styles.bottomLeftUser}>
            <Image src="/images/profilepic.jpg" alt="pix" width={40} height={40} />

            <div>
              <h4>{firstname}</h4>
              <p>@{username}</p>
            </div>
          </div>
          <button className={styles.logOutBtn} onClick={handleLogout}>Logout</button>
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
          <button className={styles.tweetBtn} onClick={handleTweet}>Tweet</button>
        </div>
        {msg}
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}

export default Account;
