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



export default function Age() {

  const navigate = useNavigate()
  // データ
  const items = ["0~3", "アイテム2", "アイテム3"];

  // プルダウンの値を管理（初期値：アイテム１）
  const [seleceItem, setSelectItem] = React.useState("アイテム1");

// ラジオボタンの値がチェンジされた時
  const handleChange = (e) => {
    setSelectItem(e.target.value);
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
              <p><font color="black">年齢選択</font></p>
              </Typography>
              </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid style={{ height: "10%" }}>
              <Typography variant="h6" className={classes.paper}>
              <p><font color="black">対象の年齢を選択してください</font></p>
              </Typography>
              </Grid>
        </Grid>
        

        <div className="container">
        <section>
          <select value={seleceItem} onChange={handleChange}>
            {items.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </section>

        <p>選択した値：{seleceItem}</p>
      </div>

        
        <Grid item xs={12}>
          <Grid style={{ height: "100%" }}>
 
              <Typography variant="h6" className={classes.paper}>
            <Button onClick={() => navigate('/componentb')}variant="contained" color="primary"><h1>決定</h1></Button>
              </Typography>

          </Grid>
        </Grid>




      </Grid>
    </Container>
  );

  
}
