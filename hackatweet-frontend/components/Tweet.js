import styles from "../styles/Tweet.module.css";

function Tweet() {
  return (
    <div className={styles.tweet}>
      <div>
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
