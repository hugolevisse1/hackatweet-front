import styles from "../styles/SignIn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const router = useRouter();

  const handleConnexion = () => {
    console.log(username, password);
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          // dispatch(login({ username: signUpUsername, token: data.token }));
          setUsername("");
          setPasword("");
          router.push("/account");
        }
      });
  };
  return (
    <div className={styles.modalContent}>
      <FontAwesomeIcon
        className={styles.logoModal}
        icon={faTwitter}
        size="lg"
        rotation={180}
        style={{ color: "#ffffff" }}
      />
      <h4>Connect to Hackatweet</h4>
      <input
        onChange={(e) => setUsername(e.target.value)}
        className={styles.inputs}
        type="text"
        placeholder="Username"
        id="signUpUsername"
      />
      <input
        onChange={(e) => setPasword(e.target.value)}
        className={styles.inputs}
        type="password"
        placeholder="Password"
        id="signUpPassword"
      />
      <button className={styles.createAccountBtn} onClick={handleConnexion}>
        Sign in
      </button>
    </div>
  );
}

export default SignIn;
