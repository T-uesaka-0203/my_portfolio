import Header from '../component/Header';
import MenuBar from '../component/MenuBar';
import Profile from '../component/Profile';
import Skill from '../component/Skill';
import WorkHistory from '../component/WorkHistory';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

export function MyPageTop() {

  return (
    <div>
        <Header/>
        <Profile/>
        <MenuBar/>
        <Skill/>
        <WorkHistory/>
        <Contact/>
        <Footer/>
    </div>
  );
}
