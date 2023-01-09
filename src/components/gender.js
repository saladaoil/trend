
/*ラジオボタン
//質問1（性別）
import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom"



const Gender = () => {
  
    // データ
    const items = ['アイテム１', 'アイテム２', 'アイテム３', 'その他'];
  
    // 選択した値を管理（初期値：ラジオ１）
    const [val, setVal] = React.useState('アイテム１');
  
    // ラジオボタンの値がチェンジされた時
    const handleChange = (e) => {
      setVal(e.target.value);
    };
  
    return (
      <>
        <h2>ラジオボタン</h2>
        <p className="center">「その他」を選択したら入力欄が表示されます</p>
        <div className="container">
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
                <label htmlFor={item}>{item}</label>
              </div>

            );
          }
          )         
          }

  

        </div>


      </>
    );




  };


  
  ReactDOM.render(<Gender />, document.getElementById('root'))


  */

//質問1（性別）
import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom"

import "./ComponentA"


import "./styles.css";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";



export default function Gender() {


  // データ
  const items = ['アイテム１', 'アイテム２', 'アイテム３', 'その他'];

  // 選択した値を管理（初期値：ラジオ１）
  const [val, setVal] = React.useState('アイテム１');

  // ラジオボタンの値がチェンジされた時
  const handleChange = (e) => {
    setVal(e.target.value);
  };


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


    const navigate = useNavigate()
    return (
        <div>
            <p>ComponentA</p>
            <button onClick={() => navigate('/componentb')}>画面遷移します！</button>
        </div>
    )


  return (
    <>
      <h2>ラジオボタン</h2>
      <p className="center">「その他」を選択したら入力欄が表示されます</p>
      <div className="container">
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
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}

        <p>選択したのは「{val}」です。</p>
        {val === 'その他' && (
          <p>
            <input type="text" />
          </p>
        )}
      
    
  

  
    
      <h2>ラジオボタン</h2>
      <p className="center">「その他」を選択したら入力欄が表示されます</p>

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
              <label htmlFor={item}>{item}</label>
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





    </>

    
  );


};

/*グリッド
  const classes = useStyles();
  return (
    <Container
      maxWidth="xs"
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      <Grid container spacing={3}>
        




      </Grid>
    </Container>
  );
}
*/














ReactDOM.render(<Gender />, document.getElementById('root'))


////////////


//export default Gender