import React from 'react';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';//左矢印アイコン
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';//右矢印アイコン
import my_image from 'assets/images/my_image.jpeg';
import uzone_image from 'assets/images/Uzone_Image.png'
import WorkListIcon from '@mui/icons-material/Checklist';
import { styled } from '@mui/system';

// カードのスタイルを定義
const StyledCard = styled(Card)({
  width: '100%',
  transition: 'transform 0.2s', // ホバー時のアニメーション
  '&:hover': {
    transform: 'scale(1.05)', // ホバー時の拡大
  },
});

const openUzone = () => {
  window.open('https://uzone.parts/', '_blank');
}

const ArrowColor = 'blue';
const ArrowColor_bg = 'white';
const Icon = 'lightskyblue';
const ActiveIcon = 'midnightblue';

interface SlideItemProps {
  title: string;
  imagePath: string;
  href: string;
  hrefDetail: string;
  additionalComments: string[];
}

const EachSlide: React.FC<SlideItemProps> = ({ title, imagePath, href, hrefDetail, additionalComments }) => {
  return (
    <Grid item xs={12} style={{ display: 'flex', marginLeft:'5%', marginRight:'5%' }}>
      <StyledCard sx={{ display: 'flex', marginLeft:'10%', marginRight:'10%', borderRadius: 5 }} onClick={openUzone}>
        <CardContent sx={{ flex: 1, padding: 0 , width: "50%", display: "block", flexDirection: "column", justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
          <CardMedia component="img" sx={{ objectFit: 'cover' }} image={imagePath} />
        </CardContent>
        <CardContent sx={{ flex: 1, width: "50%", display: "block", flexDirection: "column", justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
          <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', fontSize: 'clamp(20px, 3vw, 30px)', marginBottom:'15%' }} >
           {title}
          </Typography>
          {additionalComments.map((comment) => (
              <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', fontSize: 'clamp(12px, 3vw, 20px)' }} >
                {comment}
              </Typography>
            ))}
        </CardContent>
      </StyledCard>
    </Grid>
  );
};


const WorkHistory: React.FC = () => {
  return(
    <div>
      <div id="works" className="works" style={{ display: 'block', justifyContent: 'center'}}>
        <Typography style={{ height:"40px", fontSize:'40px' }}>　</Typography>
        <div className="section-title-block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <WorkListIcon style={{ width: '50px', height: '50px' }} />
          <h2 className="section-title" style={{ fontSize:'40px' }} >WORKS</h2>
        </div>
      </div>
      <Grid sx={{ width:'100%', justifyContent:'center'}}>
        <Carousel

          NextIcon={<ArrowForwardIosSharpIcon/>} //矢印アイコンを別のアイコンに変更
          PrevIcon={<ArrowBackIosSharpIcon/>} //矢印アイコンを別のアイコンに変更
          autoPlay = {false} //自動でCarouselを動かすかどうか(true or false)
          swipe = {true} //スワイプで動かせるかどうか
          indicators = {true} //インジケーター(下の丸いアイコン)が必要かどうか
          navButtonsAlwaysVisible = {true} //常に矢印アイコンを表示するかどうか
          cycleNavigation = {true} //最後のスライドから「次へ」の矢印アイコンを押した時に最初にスライドに動かせるようにするかどうか

          indicatorContainerProps={{
            style: {
              margin: "3px 0px 0px 0px",
              position: "relative"
            }
          }}
          indicatorIconButtonProps={{//アクティブでない下の丸いアイコンの設定
            style: {
                marginTop: '100px',
                padding: '10px',//位置調整
                color: Icon,
            }
          }}
          activeIndicatorIconButtonProps={{//アクティブな下の丸いアイコンの設定
            style: {
                color : ActiveIcon, 
            }
          }}
          navButtonsWrapperProps={{//矢印ボタン周りの設定
            style: {
              margin: '-20px 10% 0px', //位置調整
              alignItems:'center',
              // height:'100%'
              position:'absolute'
            },
          }}
          navButtonsProps = {{//矢印ボタンの設定
            style : { 
                color : ArrowColor, //矢印の色
                backgroundColor : ArrowColor_bg,//矢印の背景の色
                borderRadius : 100,//0にすると四角になる．
           },
          }}>
          <EachSlide title="Uzone" imagePath={uzone_image} href='https://uzone.parts/' hrefDetail="Uzoneはこちら" additionalComments={["自動車の中古部品に特化したECサイト", "API開発を担当", "データベース周りの調整を担当", "部品適合ロジックの構築を担当"]}/>
          <EachSlide title="Miztory" imagePath={my_image} href='' hrefDetail="外部非公開です" additionalComments={["外部システムとバッチで連携", "フルスタックで開発", "研究室内でサーバーを立てて稼働"]}/>
          <EachSlide title="社内DXツール" imagePath={my_image} href='' hrefDetail="外部非公開です" additionalComments={["GASで実行APIの実装", "Google系のAPI（VisionやGmail）との連携", "GUI、Window、ブラウザ操作の実装"]}/>
       </Carousel>
      </Grid>
    </div>
  )
}

export default WorkHistory;