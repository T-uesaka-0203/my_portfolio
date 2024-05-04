import React from 'react';
import my_image from 'assets/images/my_image.png';
// import PersonIcon from '@mui/icons-material/Person';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <div className="my-profile">
      {/* <div className="profile-image"> */}
      <img id="profile-image" src={my_image} alt="" />
      {/* </div> */}
      <div className="section-title-block">
        {/* <PersonIcon style={{ width: '50px', height: '50px' }} /> */}
        <h1 className="section-title">Tadayoshi Uesaka</h1>
      </div>
      <div className="profile-content">
        <div className="profile-text">
          <p className="text">
            はじめまして！ポートフォリオをご覧いただきありがとうございます！<br />
            24歳エンジニアの上坂と申します。エンジニア歴（IT業界）3年目です。<br />
            大学時代は東京大学の農学部でITと農業の連携に関わる研究をしておりました。<br />
            学部生時代から初期メンバーとしてWebアプリのバックエンド開発に携わっておりました。2年目まではウォータフォール型でリリースを目指し、リリース後から現在はスクラム型で保守運用をしています。<br />
            API開発とDB周りの整備を主としたバックエンドの開発を得意としています。（2024年4月12日更新）<br /><br />
            資格としてはFCE（英検準一級相当の資格）を保持しており、非日本語ネイティブの方との連携や英語での検索もしっかりとこなせます！
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
