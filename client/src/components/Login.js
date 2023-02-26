import { useRef } from "react";
import { useHistory } from "react-router-dom"

const url = "localhost"
const Login = () => {
    const history = useHistory()
    const email = useRef()
    const password = useRef()
    const error = useRef()
    function submit() {
        fetch("http://" + url + ":4000/login", { method: "post", body: JSON.stringify({ name: email.current.value, password: password.current.value }), headers: { 'Content-Type': 'application/json' } }).then((res) => {
            if (res.status === 200) {
                sessionStorage.setItem("name", email.current.value.trim())
                history.push("/home")
            }
            return res.text()
        }).then((res) => {
            error.current.innerHTML = res
        })

    }

    return (
        <div style={{ "width": "80", "height": "80vh", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
            <div className="card m-5" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column" }}>
                        <h5 className="card-title mb-3">LOGIN TO ACCESS</h5>
                        <input ref={email} className="mb-4" type="text" placeholder="Name" />
                        <input ref={password} className="mb-4" type="text" placeholder="Password" />
                        <h6 className="card-subtitle" ref={error} style={{ "color": "rgba(255,0,0,0.9)" }}></h6>
                        <button className="btn btn-primary mt-2" onClick={submit}>SUBMIT</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;