import React from 'react';
import ContactIcon from '@mui/icons-material/Email';

const Contact: React.FC = () => {
  return(
    <div>
      <div id="contact" className="my-profile" style={{ display: 'block', justifyContent: 'center' , marginTop: '100px'}}>
        <div className="section-title-block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ContactIcon style={{ width: '50px', height: '50px' }} />
          <h2 className="section-title" style={{ fontSize:'40px' }} >CONTACT</h2>
        </div>
      </div>
      <div style={{ width:'80%', margin:'auto', justifyContent: 'center', alignItems: 'center'}}>
        <h2 style={{ display:'flex', justifyContent:'center' }}>uesaka-tadayoshi@g.ecc.u-tokyo.ac.jp</h2>
        <h2 style={{ display:'flex', justifyContent:'center', marginTop:'60px'}}>ご依頼やご相談などお気軽にご連絡頂ければ幸いです。ご連絡お待ちしております。</h2>
      </div>
    </div>
  )
}

export default Contact;