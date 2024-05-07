import React from 'react';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';//左矢印アイコン
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';//右矢印アイコン
import my_image from 'assets/images/my_image.jpeg';
import uzone_image from 'assets/images/Uzone_Image.png'
import WorkListIcon from '@mui/icons-material/Checklist';

const lColor = 'black';
const bgColor = 'whitesmoke';
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
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Box sx={{ height:300, maxWidth: { xs: '60%', sm: '60%', md: '65%', lg: '70%', xl: '80%' }, backgroundColor:bgColor, alignItems: 'center'}}>
        <Grid container width='100%' direction="row" xs={12} sm={12} md={12} lg={12} justifyContent="center" alignItems="center">
          <Grid sx={{display:'flex', height: 300, width: '50%', objectFit: 'contain' , backgroundColor:lColor, alignItems: 'center'}}>
            <Box //画像をCaousel内に貼り付けたい場合
              sx={{ display: 'flex', height: 300, width: '100%', objectFit: 'contain' }}
              component="img"
              src={imagePath}
              alt="product-image"
              ></Box>
          </Grid>
          <Grid sx={{ display: 'flex', height: 300, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width:'50%' }}>
            <Typography sx={{ justifyContent: 'center', alignItems: 'center' }} variant="h5">{title}</Typography>
              <ul>
              {additionalComments.map((comment, index) => (
                <li>{comment}</li>
              ))}
              </ul>
            <Typography sx={{ justifyContent: 'center', alignItems: 'center' }} variant="h5">
              <Link href={href}>{hrefDetail}</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const WorkHistory: React.FC = () => {
  return(
    <div>
      <div id="works" className="works" style={{ display: 'block', justifyContent: 'center' , marginTop: '100px'}}>
        <div className="section-title-block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <WorkListIcon style={{ width: '50px', height: '50px' }} />
          <h2 className="section-title" style={{ fontSize:'40px' }} >WORKS</h2>
        </div>
      </div>
      <Box sx={{ width:'100%', justifyContent:'center'}}>
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
                borderRadius : 0,//0にすると四角になる．
           },
          }}>
          <EachSlide title="Uzone" imagePath={uzone_image} href='https://uzone.parts/' hrefDetail="Uzoneはこちら" additionalComments={["自動車の中古部品に特化したECサイト", "API開発を担当", "データベース周りの調整を担当", "部品適合ロジックの構築を担当"]}/>
          <EachSlide title="研究室データ管理システム" imagePath={my_image} href='' hrefDetail="外部非公開です" additionalComments={["研究室としてこれまで蓄積してきたデータを統合", "外部APIと連携", "フルスタックで開発", "研究室内でサーバーを立てて稼働"]}/>
          <EachSlide title="社内DXツール" imagePath={my_image} href='https://uzone.parts/' hrefDetail="外部非公開です" additionalComments={["GASで実行APIの実装", "Google系のAPI（VisionやGmail）との連携", "GUI、Window、ブラウザ操作の実装"]}/>
       </Carousel>
      </Box>
    </div>
  )
}

export default WorkHistory;