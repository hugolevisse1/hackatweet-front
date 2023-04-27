import styles from '../styles/SignIn.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


function SignIn () {

    const handleClose = () => {
        setOpen(false);
      };
      const handleClickOpen = () => {
        setOpen(true);
      
      };
    return(
        <div className={styles.modalContent}>
        <FontAwesomeIcon className={styles.logoModal} icon={faTwitter} size="lg" rotation={180} style={{color: "#ffffff",}} />
        <h4>Connect to Hackatweet</h4>
        <input className={styles.inputs}
						type="text"
						placeholder="Username"
						id="signUpUsername"
		/>
		<input className={styles.inputs}
						type="password"
						placeholder="Password"
						id="signUpPassword"
		/>
        </div>
    )
}

export default SignIn;