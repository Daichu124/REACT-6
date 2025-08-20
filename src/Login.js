import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const loginHome = () => {
        if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
            navigate("/home")
        }
        else {
            alert(" sai email hoặc password, vui lòng nhập lại");
        }
    }


    return (
        <div>
            <h1>LOGIN</h1>
            <Box >
                <Box>Nhập địa chỉ email  </Box>
                <TextField type="email" placeholder="VD dai12@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                <Box>Nhập password</Box>
                <TextField type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div>
                    <Button onClick={loginHome} variant="contained">LOGIN</Button>
                </div>
            </Box>

        </div>
    )
}
export default Login;