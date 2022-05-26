import './Error404.css'
import error404 from '../../assests/error404.svg'
import { useNavigate } from 'react-router'

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <main>
      <div className="errorImgContainer">
        <img className="errorImg" src={error404} alt="page not found" />
        <button className="btn card_btn" onClick={() => navigate('/')}>
          Go To Home
        </button>
      </div>
    </main>
  )
}
export { Error404 }
