import PropTypes from 'prop-types';

import { useState, useRef } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import { skeleton } from '../../helpers/utils';
import validator from 'email-validator';
import emailjs from '@emailjs/browser';

export default function ContactForm({ loading }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setnameError] = useState(false);
  const [messageError, setmessageError] = useState(false);
  const [btn, setBtn] = useState(false);
  const form = useRef();

  function validateEmail() {
    if (!validator.validate(email)) {
      setEmailError(true);
      return false;
    } else {
      setEmailError(false);
      return true;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validEmail = validateEmail();

    if (!name.length) {
      setnameError(true);
    } else {
      setnameError(false);
    }

    if (!message.length) {
      setmessageError(true);
    } else {
      setmessageError(false);
    }

    if (validEmail && name.length && message.length) {
      setBtn(true);
      emailjs
        .sendForm(
          'service_pupbln8',
          'template_pur1zs5',
          form.current,
          'ET7i8l-bvHQeQWkub'
        )
        .then(
          (result) => {
            console.log('Email sending status: ', result.text);
            setShowAlert('Sent successfully');
            setName('');
            setEmail('');
            setMessage('');
            setBtn(false);
          },
          (error) => {
            console.error(error.text);
            setShowAlert(
              'Service Down: Please send directly to my email. Thank you.'
            );
          }
        );
    }
  };

  return (
    <div className="w-full">
      {loading ? (
        skeleton({ width: 'w-full', height: 'h-full' })
      ) : (
        <div className="card shadow-lg compact bg-base-100 card-body">
          {showAlert && (
            <Snackbar
              open={showAlert ? true : false}
              autoHideDuration={6000}
              onClose={() => setShowAlert(false)}
              message={showAlert}
            >
              <Alert>{showAlert}</Alert>
            </Snackbar>
          )}

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            elevation={2}
            component={Paper}
            className="text-base-content opacity-50 text-xs"
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Contact Me
              </Typography>
              <Box
                ref={form}
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  name="user_name"
                  error={nameError}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  helperText={nameError ? 'Name cannot be empty' : ''}
                />
                <TextField
                  variant="outlined"
                  error={emailError}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={emailError ? 'Invalid email' : ''}
                />
                <TextField
                  error={messageError}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Message"
                  id="message"
                  name="message"
                  multiline
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  helperText={messageError ? 'Message cannot be empty' : ''}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={btn}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </div>
      )}
    </div>
  );
}

ContactForm.propTypes = {
  loading: PropTypes.bool.isRequired,
};
