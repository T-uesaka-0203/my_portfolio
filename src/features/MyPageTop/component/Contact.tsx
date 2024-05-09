import React, { useState, FormEvent } from 'react';
import { Grid, Card, TextField, Button, Typography, CardContent } from '@mui/material';
import ContactIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const currentFormContent = e.currentTarget;

      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID || '',
        process.env.REACT_APP_TEMPLATE_ID || '',
        e.currentTarget,
        process.env.REACT_APP_PUBLIC_KEY || ''
      );
      
      setStateMessage('Message sent!');

      console.log(result);
      currentFormContent.reset();

      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    } catch (error) {
      setStateMessage('Something went wrong, please try again later');
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div id="contact" className="contact" style={{ display: 'block', justifyContent: 'center'}}>
        <Typography style={{ height:"40px", fontSize:'40px' }}>　</Typography>
        <div className="section-title-block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ContactIcon style={{ width: '50px', height: '50px' }} />
          <h2 className="section-title" style={{ fontSize:'40px' }} >CONTACT</h2>
        </div>
      </div>
      <Grid container justifyContent="center" marginBottom="50px">
        <Grid item xs={11} sm={8} md={8}>
          <Card  sx={{ borderRadius: 4 }}>
            <CardContent>
              <form onSubmit={sendEmail}>
                <TextField label="Name" name="user_name" fullWidth margin="normal" />
                <TextField label="Email" name="user_email" type="email" fullWidth margin="normal" />
                <TextField label="Message" name="message" multiline rows={4} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} sx={{ display:"block", marginTop:"2%", marginLeft:"auto", marginRight:"auto" }}>
                  {isSubmitting ? 'Sending...' : 'Send'}
                </Button>
                {stateMessage && <Typography variant="body2" color={stateMessage.includes('Something went wrong') ? 'error' : 'textPrimary'}>{stateMessage}</Typography>}
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ marginLeft:"auto", marginRight:"auto", marginBottom:'50px', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', textAlign:"center", fontSize: 'clamp(15px, 3vw, 30px)'}} >
        ご依頼やご相談などお気軽にご連絡下さい !
        </Typography>
      </div>
    </div>
  );
};

export default ContactForm;
