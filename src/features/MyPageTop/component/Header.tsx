import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll"
import { AppBar, Container, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import { SvgIconComponent } from '@material-ui/icons';
import PersonIcon from '@mui/icons-material/Person';
import SkillIcon from '@mui/icons-material/Build';
import WorkListIcon from '@mui/icons-material/Checklist';
import ContactIcon from '@mui/icons-material/Email';
import background_image from 'assets/images/background_brighter.png';

interface NavItemProps {
  iconComponent: SvgIconComponent;
  href: string;
  text: string;
}

const EachMyPageContent: React.FC<NavItemProps> = ({ iconComponent, href, text }) => {
  return (
      <ListItemButton style={{ justifyContent: 'center', width: 'fit-content' }} dense>
          <ListItemIcon sx={{ justifyContent: 'center', padding:"5%", minWidth:'15px' }}>
              {iconComponent}
          </ListItemIcon>
          <AnchorLink href={href} style={{ color: 'inherit', textDecoration: 'none'}}>
          <ListItemText
            primary={<Typography sx={{ fontSize: { xs: '15px', sm: '30px', md: '40px' } }}>{text}</Typography>}
            disableTypography
          />
          </AnchorLink>
      </ListItemButton>
  );
};

const Header: React.FC = () => {

  const MenuContents = [
    { iconComponent: <PersonIcon sx={{ width: { xs: '15px', sm: '30px', md: '40px' }, height: { xs: '20px', sm: '30px', md: '40px' } }} />, href: "#top", text: "PROFILE" },
    { iconComponent: <SkillIcon sx={{ width: { xs: '15px', sm: '30px', md: '40px' }, height: { xs: '20px', sm: '30px', md: '40px' } }} />, href: "#skill", text: "SKILL" },
    { iconComponent: <WorkListIcon sx={{ width: { xs: '15px', sm: '30px', md: '40px' }, height: { xs: '20px', sm: '30px', md: '40px' } }} />, href: "#works", text: "WORKS" },
    { iconComponent: <ContactIcon sx={{ width: { xs: '15px', sm: '30px', md: '40px' }, height: { xs: '20px', sm: '30px', md: '40px' } }} />, href: "#contact", text: "CONTACT" }
  ];

  return(
    <Grid
      id="top"
      sx={{
        color: '#191919',
        padding: '10px',
        height: { xs: '180px', sm: '180px', md: '280px', lg:"360px" },
        backgroundImage: "url(" + background_image + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <AppBar position="fixed" sx={{ backgroundColor: '#33CCFF' }}>
        <Container>
          <Grid sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <List component="nav" sx={{ width:"100%", height: { xs: '30px', sm: '40px', md: '50px' }, display: 'flex', marginLeft:'auto', marginRight:'auto' }}>
              {MenuContents.map((MenuContent) => (
                <EachMyPageContent
                  iconComponent={MenuContent.iconComponent}
                  href={MenuContent.href}
                  text={MenuContent.text}
                />))}
            </List>
          </Grid>
        </Container>
      </AppBar>
    </Grid>
  );
};

export default Header;
