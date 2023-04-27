import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import SignIn from './SignIn';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


function Home() {

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
        <FontAwesomeIcon className={styles.logoHome} icon={faTwitter} size="lg" rotation={180} style={{color: "#ffffff",}} />
        </div>
        <div className={styles.right}>
          <h2 className={styles.bigTitle}>See what's<br/> happening</h2>
          <h4>Join Hackatweet today.</h4>
          <button className={styles.signUpButton} >Sign Up</button>
          <h6>Already have an account?</h6>
          <button className={styles.signInButton} variant="outlined" onClick={handleClickOpen}>
          Sign In
           </button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={styles.dialog}>
           <SignIn/>          
        </DialogContent>
  
        <DialogActions className={styles.dialog}>
          <button className={styles.logInBtn} onClick={handleClose}>Sign in</button>
        </DialogActions>
      </Dialog>
        </div>
      </main>
    </div>
  );
}


export default Home;