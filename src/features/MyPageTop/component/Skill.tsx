import React from 'react';
import { Typography, Grid } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SkillIcon from '@mui/icons-material/Build';
import ReactEcharts from 'echarts-for-react';

interface SkillContent {
  technology: string;
  yearsOfExperience: string;
  rating: number;
}

interface SkillTypeContent {
  title: string;
  description: string;
  skills: SkillContent[];
}

interface EchartArgs  {
  nameAndMaxValue: Array<{
    name: string;
    max: number;
  }>;
  realValue: number[];
}

const EChartBarRader: React.FC<EchartArgs> = ({ nameAndMaxValue, realValue }) => {
  const option = {
    radar: {
      indicator: nameAndMaxValue,
      axisName: {
        formatter: '【{value}】',
        color: '#000000'
      },
      shape: 'circle',
      splitArea: {
        areaStyle: {
          color: ["#33EEFF", "#33DDFF", "#33CCFF", "#33BBFF", "#33AAFF"],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
    },
    series: [
      {
        type: 'radar',
        areaStyle: { color: '#FFFFFF', opacity: 0 },
        data: [
          {
            value: realValue,
            lineStyle: {
              color: '#FFE434', // 折れ線の色
              width: 3, // 折れ線の幅
              type: 'solid', // 線の種類（実線、点線、破線など）
            },
            itemStyle: { color: '#FFE434' },
          },
        ],
        symbolSize: 10,
        label: {
          show: true,
          formatter: function(params: any) {
            return params.value;
          }
        },
      },
    ],
  };

  return <ReactEcharts option={option} opts={{ renderer: 'svg' }}/>;
}

const EachSkillDesc: React.FC<SkillTypeContent> = ({ title, description, skills }) => {
  return (
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ width:"100%", height:"100%" ,borderRadius: 16 }}>
          <CardContent sx={{ height: "15%", display: "block", flexDirection: "column", textAlign: 'center' }} >
            <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', fontSize: 'clamp(20px, 3vw, 30px)'}} >
             { title }
            </Typography>
          </CardContent>
          <EChartBarRader 
            nameAndMaxValue={
              skills.map((skill) => (
                { name:skill.technology, max:5 }
              ))
            }
            realValue={
              skills.map((skill) => (
                skill.rating
              ))
            }
            />
          <CardContent sx={{ height: "40%", display: "block", flexDirection: "column", textAlign: 'center' }} >
            <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', fontSize: 'clamp(15px, 3vw, 20px)'}} >
             { description }
            </Typography>
          </CardContent>
        </Card>
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
      <div>
      <Grid container spacing={2} style={{ justifyContent: 'center' }}>
        <EachSkillDesc
            title="バックエンド"
            description="基本的な事は一通りできます。特にAPI開発とDB周りは得意です。"
            skills={[
              { technology: 'PHP8', yearsOfExperience: '2年', rating: 3 },
              { technology: 'Laravel 8', yearsOfExperience: '2年', rating: 4 },
              { technology: 'MySQL ( 8.? )', yearsOfExperience: '2年', rating: 4 },
              { technology: 'Nginx', yearsOfExperience: '2年', rating: 3 },
              { technology: 'Swagger', yearsOfExperience: '1年', rating: 4 },
              { technology: 'Postman', yearsOfExperience: '1年', rating: 3 },
            ]}
          />
          <EachSkillDesc
            title="フロントエンド"
            description="このページはTypeScriptとReactで作成しています。"
            skills={[
              { technology: 'TypeScript', yearsOfExperience: '3ヶ月', rating: 2 },
              { technology: 'JavaScript', yearsOfExperience: '3ヶ月', rating: 3 },
              { technology: 'React', yearsOfExperience: '3ヶ月', rating: 2 },
              { technology: 'HTML/CSS', yearsOfExperience: '3ヶ月', rating: 3 },
            ]}
          />
          <EachSkillDesc
            title="インフラ・サーバー"
            description="AWSでは環境構築からデプロイまでの経験があります。このページはrenderで動作しています。"
            skills={[
              { technology: 'Docker', yearsOfExperience: '3ヶ月', rating: 4 },
              { technology: 'AWS', yearsOfExperience: '2年', rating: 3 },
              { technology: 'オンプレミスサーバー', yearsOfExperience: '3ヶ月', rating: 2 },
              { technology: 'render', yearsOfExperience: '3ヶ月', rating: 2 },
              { technology: 'Virtual Box', yearsOfExperience: '3ヶ月', rating: 3 },
            ]}
          />
          <EachSkillDesc
            title="チーム開発用ツール"
            description="GitではGit flowで運用を行なっていました。"
            skills={[
              { technology: 'Git・GitHub', yearsOfExperience: '2年', rating: 4 },
              { technology: 'Backlog', yearsOfExperience: '2年', rating: 3 },
              { technology: 'Slack', yearsOfExperience: '2年', rating: 3 }
            ]}
          />
          <EachSkillDesc
            title="その他ツール"
            description="GASのAPIはサーバーレスのような形で動作させていました。"
            skills={[
              { technology: 'GAS API', yearsOfExperience: '1年', rating: 3 },
              { technology: 'IDA Pro', yearsOfExperience: '1年', rating: 3 },
              { technology: 'Ghidra', yearsOfExperience: '1年', rating: 2 }
            ]}
          />
          <EachSkillDesc
            title="その他言語"
            description="Pythonは社内DXツールの作成やクローリングに主に使用しておりました。"
            skills={[
              { technology: 'C++', yearsOfExperience: '1年', rating: 2 },
              { technology: 'Python', yearsOfExperience: '3年', rating: 4 },
              { technology: 'Julia', yearsOfExperience: '3ヶ月', rating: 3 },
              { technology: 'アセンブリ言語', yearsOfExperience: '1年', rating: 2 }
            ]}
          />
      </Grid>
      </div>
    </div>
  );
}

export default Skill;
