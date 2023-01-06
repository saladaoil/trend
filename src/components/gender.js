//質問1（性別）
import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom"

const Gender = () => {
  /*　男女　ページ遷移
    const navigate = useNavigate()
    return (
        <div>          
            <p>性別選択</p>
            <button onClick={() => navigate('/componentb')}>男</button>
            <button onClick={() => navigate('/componentb')}>決定</button>
            
        </div>
    )
  */
    function App() {
      const [val, setVal] = React.useState('cat');
    
      const handleChange = e => setVal(e.target.value);
    
      return (
        <>
          <label>
            <input
              type="radio"
              value="cat"
              onChange={handleChange}
              checked={val === 'cat'}
            />
            猫派
          </label>
          <label>
            <input
              type="radio"
              value="dog"
              onChange={handleChange}
              checked={val === 'dog'}
            />
            犬派
          </label>
          <p>選択値：{val}</p>
        </>
      );
    }
    
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
}
export default Gender