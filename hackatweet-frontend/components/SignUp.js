import styles from "../styles/SignIn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    fetch("https://hackaton-two.vercel.app/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname,
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
          // dispatch(login({ username: signUpUsername, token: data.token }));
          setFirstname("");
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
      <h4>Create your Hackatweet account</h4>
      <input
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
        className={styles.inputs}
        type="text"
        placeholder="Name"
        id="signUpName"
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className={styles.inputs}
        type="text"
        placeholder="Username"
        id="signUpUsername"
      />
      <input
        onChange={(e) => setPasword(e.target.value)}
        value={password}
        className={styles.inputs}
        type="password"
        placeholder="Password"
        id="signUpPassword"
      />
      <button className={styles.createAccountBtn} onClick={handleRegister}>
        Create account
      </button>
    </div>
  );
}

export default SignUp;
