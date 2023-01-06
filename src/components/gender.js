//質問1（性別）
import { useNavigate } from "react-router-dom"

const Gender = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>性別選択</p>
            <button onClick={() => navigate('/componentb')}>画面遷移します！</button>
        </div>
    )
}
export default Gender