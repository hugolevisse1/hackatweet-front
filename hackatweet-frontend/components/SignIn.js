import styles from '../styles/SignIn.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Modal from 'react-modal';
import { useState } from 'react';


function SignIn () {
    return(
        <div className={styles.modalContent}>
            <FontAwesomeIcon className={styles.logoModal} icon={faTwitter} size="lg" rotation={180} style={{color: "#ffffff",}} />
            <h4>Connect to Hackatweet</h4>
            <input
						type="text"
						placeholder="Name"
						id="signUpName"
			/>
            <input
						type="text"
						placeholder="Username"
						id="signUpUsername"
					/>
			<input
						type="password"
						placeholder="Password"
						id="signUpPassword"
			/>
        </div>
    )
}

export default SignIn;