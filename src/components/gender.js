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
                        <button onClick={() => Gender('/componentb')}>決定</button>
  

        </div>


      </>
    );




  };


  
  ReactDOM.render(<Gender />, document.getElementById('root'))
    
    




export default Gender