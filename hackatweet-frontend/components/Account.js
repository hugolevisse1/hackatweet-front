import styles from "../styles/Account.module.css";

function Account() {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.leftSide}></div>
      <div className={styles.middle}>
        <div className={styles.postTweet}>
            <h4>Home</h4>
            <input
        className={styles.tweetBox}
        type="text"
        placeholder="What's on your mind..."
        id="signUpUsername"
      />
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}

export default Account;
