import React from 'react';
// import {ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Grid } from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary, CardActionArea, Container, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { SvgIconComponent } from '@material-ui/icons';
import SkillIcon from '@mui/icons-material/Build';
import my_image from 'assets/images/my_image.png';

interface SkillContent {
  technology: string;
  yearsOfExperience: string;
  rating: number;
}

interface SkillTypeContent {
  iconComponent: SvgIconComponent;
  title: string;
  description: string;
  skills: SkillContent[]; // skillsプロパティはSkillの配列であることを指定
}

const StarDescription: React.FC = () => {
  const skillLevels = [
      { rating: 1, description: "Pythonなどを経由すれば扱える" },
      { rating: 2, description: "調べながら基礎的な開発ができる" },
      { rating: 3, description: "基本的な機能の実装は特に調べなくても行える" },
      { rating: 4, description: "内部動作にも多少の知見がある" },
      { rating: 5, description: "内部動作への理解を開発に活かせる" }
    ];

  return (
    <Grid className="skill-desc" item xs={12} sm={6} md={6} lg={6} style={{ backgroundColor : '#00FFFF', maxWidth: '40%', margin : '25px', padding: '20px', borderRadius: '5px' }}>
      <Typography variant="h5" gutterBottom style={{ textAlign : 'center' }}>スキルレベルの目安</Typography>
      <TableContainer component={Paper} style={{ border: 'none' }}>
      <Table style={{ border: 'none' }}>
        <TableBody style={{border: 'none'}}>
            {skillLevels.map((skillLevel, index) => (
              <TableRow key={index} style={{ border: 'none' }}>
                <TableCell style={{border: 'none'}}>{'★'.repeat(skillLevel.rating)}</TableCell>
                <TableCell style={{border: "none"}}>{skillLevel.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
};

const EachSkillDesc: React.FC<SkillTypeContent> = ({ title, description, skills, iconComponent}) => {
  return (
    <Grid container spacing={2} style={{ justifyContent: 'center' }}>
      {skills.map((skill, index) => (
        <Grid item xs={12} sm={6} md={2}>
          <Card sx={{ width:"100%", height:"100%" ,borderRadius: 16 }}>
            <CardMedia component="img" height="62%" image={my_image} />
            <CardContent sx={{ height: "38%", display: "block", flexDirection: "column", textAlign: 'center' }} >
              <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', fontSize: 'clamp(12px, 3vw, 20px)'}} >
               { skill.technology }
              </Typography>
              <Typography variant="body2" noWrap style={{ fontWeight: 'bold', fontSize: 'clamp(12px, 3vw, 20px)' }}>
              { skill.yearsOfExperience }
              </Typography>
              <Typography variant="body2" noWrap style={{ color: "#33CCFF", fontWeight: 'bold', fontSize: 'clamp(12px, 3vw, 20px)' }}>
              {'★'.repeat(skill.rating)}
              </Typography>
            </CardContent>
          </Card>
      </Grid>
      ))}
    </Grid>
  );
};

const Skill: React.FC = () => {
  return (
    <div id="skill" className="my-profile" style={{ display: 'block'}}>
      <div className="section-title-block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SkillIcon style={{ width: '50px', height: '40px' }} />
        <h2 className="section-title" style={{ fontSize:'40px' }} >SKILL</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StarDescription/>
      </div>
      <div>
      <Grid container spacing={2} style={{ justifyContent: 'center' }}>
        <EachSkillDesc
            title="バックエンド"
            description="基本的な事は一通りできます。特にAPI開発とDB周りは得意です。"
            skills={[
              { technology: 'PHP8 (Laravel 8)', yearsOfExperience: '2年', rating: 5 }
            ]}
            iconComponent={<SkillIcon />}
          />
        <EachSkillDesc
            title="DB"
            description="MySQLがメインです。"
            skills={[
              { technology: 'MySQL ( 8.? )', yearsOfExperience: '2年', rating: 4 },
              { technology: 'Paradox', yearsOfExperience: '3ヶ月', rating: 1 },
              { technology: 'Adabas', yearsOfExperience: '3ヶ月', rating: 1 },
              { technology: 'Microsoft Access', yearsOfExperience: '3ヶ月', rating: 1 }
            ]}
            iconComponent={<SkillIcon />}
          />
          <EachSkillDesc
            title="フロントエンド"
            description="このページはTypeScriptとReactで作成しています。"
            skills={[
              { technology: 'TypeScript ( React )', yearsOfExperience: '3ヶ月', rating: 2 },
            ]}
            iconComponent={<SkillIcon />}
          />
          <EachSkillDesc
            title="インフラ・サーバー"
            description="AWSの構築経験はごく基礎的なもののみです。このページはrenderで動作しています。"
            skills={[
              { technology: 'AWS', yearsOfExperience: '2年', rating: 2 },
              { technology: 'オンプレミスサーバー', yearsOfExperience: '3ヶ月', rating: 2 },
            ]}
            iconComponent={<SkillIcon />}
          />
          <EachSkillDesc
            title="チーム開発用ツール"
            description="GitではGit flowで運用を行なっていました。"
            skills={[
              { technology: 'Git・GitHub', yearsOfExperience: '2年', rating: 4 },
              { technology: 'Backlog', yearsOfExperience: '2年', rating: 3 },
              { technology: 'Slack', yearsOfExperience: '2年', rating: 3 }
            ]}
            iconComponent={<SkillIcon />}
          />
          <EachSkillDesc
            title="その他ツール"
            description="Swaggerは設計書兼テストツールとして運用していました。"
            skills={[
              { technology: 'Docker', yearsOfExperience: '2年', rating: 4 },
              { technology: 'Swagger', yearsOfExperience: '1年', rating: 3 },
              { technology: 'Postman', yearsOfExperience: '1年', rating: 3 },
              { technology: 'GAS API', yearsOfExperience: '1年', rating: 3 },
              { technology: 'Ghidra', yearsOfExperience: '1年', rating: 2 },
              { technology: 'IDA Pro', yearsOfExperience: '1年', rating: 3 }
            ]}
            iconComponent={<SkillIcon />}
          />
          <EachSkillDesc
            title="その他言語"
            description="Pythonは経験年数こそ長いものの簡単なDXの作成などがメインで、FWの使用経験などはないです。"
            skills={[
              { technology: 'C++', yearsOfExperience: '1年', rating: 2 },
              { technology: 'Python', yearsOfExperience: '3年', rating: 4 },
              { technology: 'Julia', yearsOfExperience: '3ヶ月', rating: 3 },
              { technology: 'アセンブリ言語', yearsOfExperience: '1年', rating: 2 }
            ]}
            iconComponent={<SkillIcon />}
          />
      </Grid>
      </div>
    </div>
  );
}

export default Skill;
