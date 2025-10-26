import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import {Link} from "react-router";


export default function Home() {
    const navigate = useNavigate();

    const clickCallback = () => {
        navigate('/test/01')
    }


    return (
        <>
            <div>
                <h1>home</h1>
                <Button type="primary" onClick={clickCallback}>Primary Button</Button>
                <br/>
                <Link to={'/sys/login'}>测试路由</Link>
            </div>
        </>
    )

}