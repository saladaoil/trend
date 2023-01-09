import { useNavigate } from "react-router-dom"
import React from 'react'
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom'



import "./styles.css";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));



export default function Gender() {

    
/*
    const navigate = useNavigate()
    // データ

const items = ['アイテム１', 'アイテム２', 'アイテム３', 'その他'];

// 選択した値を管理（初期値：ラジオ１）
const [val, setVal] = React.useState('アイテム１');

// ラジオボタンの値がチェンジされた時
const handleChange = (e) => {
  setVal(e.target.value);
};


  const classes = useStyles();
  return (
    <Container
      maxWidth="xs"
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper variant="outlined" style={{ height: "100%" }}>
                <Typography variant="h6" className={classes.paper}>
                  コンテナA
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined" style={{ height: "100%" }}>
                <Typography variant="h6" className={classes.paper}>
                  コンテナB
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid style={{ height: "100%" }}>
            <Paper variant="outlined" style={{ height: "100%" }}>
              <Typography variant="h6" className={classes.paper}>
                コンテナC
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined" style={{ height: "100%" }}>
            <Typography variant="h6" className={classes.paper}>
              コンテナD
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
  */

  const navigate = useNavigate()
  // データ
const items = ['男', '女', ];

// 選択した値を管理（初期値：ラジオ１）
const [val, setVal] = React.useState('男');

// ラジオボタンの値がチェンジされた時
const handleChange = (e) => {
setVal(e.target.value);
};

  const classes = useStyles();
  return (
    <Container
      maxWidth="xs"
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      <Grid container spacing={3}>

      <Grid item xs={12}>
          <Grid style={{ height: "5%" }}>
              <Typography variant="h2" className={classes.paper}>
              <p><font color="black">性別選択</font></p>
              </Typography>
              </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid style={{ height: "10%" }}>
              <Typography variant="h6" className={classes.paper}>
              <p><font color="black">対象の性別を選択してください</font></p>
              </Typography>
              </Grid>
        </Grid>
        

      <div className="center">
        {items.map((item) => {
          return (
            <div key={item}>
              <input
                id={item}
                type="radio"
                value={item}
                onChange={handleChange}
                checked={item === val}
              />
              <label htmlFor={item}>
                    {item}
                </label>
            </div>
          );
        })}

        <p>選択したのは「{val}」です。</p>
        {val === 'その他' && (
          <p>
            <input type="text" />
          </p>
        )}
        </div>
        
        <Grid item xs={12}>
          <Grid style={{ height: "100%" }}>
 
              <Typography variant="h6" className={classes.paper}>
            <Button onClick={() => navigate('/age')}variant="contained" color="primary"><h1>決定</h1></Button>
              </Typography>

          </Grid>
        </Grid>




      </Grid>
    </Container>
  );

  
}
