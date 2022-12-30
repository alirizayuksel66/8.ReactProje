import { useAuth } from "../../context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet";
import { useFormik } from "formik";


export default function Login() {

    const navigate = useNavigate()
    const location = useLocation()
    const { setUser } = useAuth()
    console.log(location)
    const loginHandle = () => {
        setUser({
            id: 1,
            usename: 'Ali Rıza Yüksel'
        })
        navigate(location?.return_url || '/', {
            replace: true,
            state: {
                name: 'Ali Rıza Yüksel'
            }
        })
    }

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            setUser(values)
            navigate(location?.return_url || '/', {
                replace: true
            })
        }
    })

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            Login Page <br></br>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Kullanıcı Adı</label>
                <input type="text" id="username" value={values.username} onChange={handleChange} /> <br></br>
                <label htmlFor="password">Parola</label>
                <input type="password" id="password" value={values.password} onChange={handleChange} /> <br></br>
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    )
}