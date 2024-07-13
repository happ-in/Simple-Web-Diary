import kakaoLoginIcon from '../icons/kakao_login_large_wide.png'
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div> 
            <h1>Login</h1>
            <Link to="/cal">
                <img src={kakaoLoginIcon} alt="kakaoLoginIcon" />
            </Link>
        </div>
    )
}
export default Login;