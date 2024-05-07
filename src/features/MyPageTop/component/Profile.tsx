import my_image from 'assets/images/my_image.png';
import { Grid, Typography, Card, CardContent } from '@mui/material';

const Profile: React.FC = () => {
  const PRSentences = [
    "はじめまして！ポートフォリオをご覧いただきありがとうございます！",
    "24歳エンジニアの上坂と申します。エンジニア歴3年目です。",
    "大学時代は東京大学の農学部でITと農業の連携に関わる研究をしておりました。",
    "これまでは、新規アプリ開発の初期メンバーとしてWebアプリのバックエンド開発に携わっておりました。特に2年目まではウォータフォール型でリリースを目指し、リリース後はスクラム型で保守運用をしています。",
    "API開発とDB周りの整備を主としたバックエンドの開発を得意としています。\n\n",
    "　",
    "資格としてはFCE（英検準一級相当の資格）を保持しており、非日本語ネイティブの方との連携や英語での検索にも対応可能です！ ",
    "（2024年4月12日更新）"
  ];

  const imageContainerStyle: React.CSSProperties = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: `clamp(150px, 25vw, 500px)`,
    marginTop: `clamp(-250px, -12.5vw, -75px)`, // マージンを適用する
  };

  return (
    <div className="my-profile" style={{ display: 'flex', flexDirection: 'column' }}>
      <img id="profile" src={my_image} alt="" style={imageContainerStyle}/>
      <div style={{ display:'flex', alignItems:'center', height:'clamp(60px, 10vw, 120px)' }}>
        <h2 style={{ display:'flex', margin:'auto', marginTop:'clamp(20px, 3vw, 40px)',  height:'clamp(60px, 3vw, 120px)', fontWeight: 'bold', fontSize: 'clamp(25px, 5vw, 40px)', textAlign:'center' }} >
          Tadayoshi Uesaka
        </h2>
      </div>
      <Grid container rowSpacing={0} style={{ width:"96%", justifyContent:'center', marginLeft:"2%", marginRight:"2%" }}>
      <Grid item xs={12} sm={12} md={10} lg={10} sx={{ marginBottom:"2%" }}>
        <Card sx={{ maxWidth:"100%", display:"flex", borderRadius: 10, margin:"auto" }}>
          <CardContent sx={{ display: "block", margin:"auto", flexDirection: "column", textAlign: 'left' }} >
            {PRSentences.map((PRSentence) => (
              <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', fontSize: 'clamp(15px, 3vw, 20px)'}} >
                {PRSentence}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
}

export default Profile;
