import { useNavigate } from "react-router-dom"

const ComponentA = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>ComponentA</p>
            <button onClick={() => navigate('/componentb')}>画面遷移します！</button>
        </div>
    )
}
export default ComponentA