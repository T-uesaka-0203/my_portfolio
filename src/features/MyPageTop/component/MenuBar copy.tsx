import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll"
import {ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import { SvgIconComponent } from '@material-ui/icons';
import PersonIcon from '@mui/icons-material/Person';
import SkillIcon from '@mui/icons-material/Build';
import WorkListIcon from '@mui/icons-material/Checklist';
import ContactIcon from '@mui/icons-material/Email';

interface NavItemProps {
    iconComponent: SvgIconComponent;
    href: string;
    text: string;
  }

const EachMyPageContent: React.FC<NavItemProps> = ({ iconComponent, href, text }) => {
    return (
        <ListItemButton style={{ justifyContent: 'center', width: 'fit-content' }} dense>
            <ListItemIcon style={{ justifyContent: 'center' }}>
                {iconComponent}
            </ListItemIcon>
            <AnchorLink href={href} style={{ color: 'inherit', textDecoration: 'none'}}>
                <ListItemText primary={
                    <Typography variant="h4">{text}</Typography>
                }
                disableTypography
                />
            </AnchorLink>
        </ListItemButton>
    );
  };

const MenuBar: React.FC = () => {
  return (
    <nav id="navigation" className="" style={{ justifyContent: 'center', textAlign: 'center', top: '0px', left: '0', right: '0', position: 'sticky', backgroundColor: '#fff', zIndex: 100 , display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0, fontSize: 'clamp(14px, 2vw, 18px)', width: '100%' }}>
          <EachMyPageContent iconComponent={<PersonIcon style={{ width: 'clamp(10px, 5vw, 40px)', height: 'clamp(10px, 5vw, 40px)' }} />} href="#profile" text="PROFILE" />
          <EachMyPageContent iconComponent={<SkillIcon style={{ width: 'clamp(10px, 5vw, 40px)', height: 'clamp(10px, 5vw, 40px)' }} />} href="#skill" text="SKILL" />
          <EachMyPageContent iconComponent={<WorkListIcon style={{ width: 'clamp(10px, 5vw, 40px)', height: 'clamp(10px, 5vw, 40px)' }} />} href="#works" text="WORKS" />
          <EachMyPageContent iconComponent={<ContactIcon style={{ width: 'clamp(10px, 5vw, 40px)', height: 'clamp(10px, 5vw, 40px)' }} />} href="#contact" text="CONTACT" />
        </ul>
    </nav>
  );
}

export default MenuBar;
