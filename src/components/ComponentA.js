import { useNavigate } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom'


const ComponentA = () => {
    const navigate = useNavigate()
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
        })}

        <p>選択したのは「{val}」です。</p>
        {val === 'その他' && (
          <p>
            <input type="text" />
          </p>
        )}

            <p>ComponentA</p>
            <button onClick={() => navigate('/componentb')}>画面遷移します！</button>
        </div>

        </>
    )
}
export default ComponentA