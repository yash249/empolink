import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import TextBox from '../../Components/TextField/Textfield'
// import Button from '@material-ui/core/Button';
import Button from '../../Components/Button/Button'
import { APIHelper } from '../../utils/ApiHelper'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import qs from 'qs'
import './LoginPage.scss'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            isRememberMeChecked: false
        };
    }
    render() {
        const handleOnLogin = () => {
            console.log("handleLogin")
            console.log(this.state.username, this.state.password)

            let payload = qs.stringify({
                email: this.state.username,
                password: this.state.password
            })

            const params = new URLSearchParams()
            params.append('email', this.state.username)
            params.append('password', this.state.password)
            let headers = {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }

            APIHelper.postMethod("http://localhost:3000/api/auth/login", params, headers).then(response => {
                if (response['status'] === 1) {
                    console.log("Logged In")
                    console.log(response.data.token)
                    localStorage.setItem('itemName', response.data.token)
                    // localStorage.getItem('itemName')
                }
            })

            // axios({
            //     method: 'post',
            //     url: "http://localhost:3000/api/auth/login",
            //     data: params,
            //     headers: headers
            // }).then(response => {
            //     if (response['ok']) {
            //         console.log("Logged In")
            //     }
            // })

        }

        const responseGoogle = response => {
            console.log(response)
        }
        return (
            <div className="loginPageWrapper">
                <div className="empoLinkImgStyles">
                    <h1 style = {{marginLeft: '97px'}} className="empolink">EmpoLink</h1>
                    <div style = {{width: '86%'}}>
                        <img
                            class="imgStyles"
                            src="https://cdn.animaapp.com/projects/609e47554a5b8cd6aa2fa687/releases/609e47894a5b8cd6aa2fa68a/img/clip-1062-1@1x.png"
                        />
                    </div>
                </div>
                <div className="loginPage">
                    <div className="loginCard">
                        <h1 className="empolink">Log in</h1>
                        <div style={{ paddingBottom: "18px" }}>
                            <TextBox
                                label={"Username"}
                                onChange={(event) => this.setState({ username: event.target.value })}
                                value={this.state.username}
                                width={"458px"}
                            />
                        </div>
                        <div style={{ paddingBottom: "9px" }}>
                            <TextBox
                                label={"Password"}
                                type={"password"}
                                onChange={(event) => this.setState({ password: event.target.value })}
                                width={"458px"}
                            />
                        </div>
                        <div>
                            <div style={{ display: "inline-block" }}>
                                <FormControlLabel
                                    control={<Checkbox checked={this.state.isRememberMeChecked} onChange={() => { this.setState({ isRememberMeChecked: !this.state.isRememberMeChecked }) }} name="checkedA" />}
                                    label="Remember Me"
                                />
                            </div>
                            <div className='sign-up' style={{ cursor: "pointer", display: "inline-block", color: "#5bb2fc", paddingLeft: "240px" }}>Forgot ?</div>
                        </div>
                        {/* <Button variant="outlined" color="primary" onClick={handleOnLogin}>
                    Login
                </Button> */}
                        <div style={{ paddingBottom: '80px', paddingTop: '21px' }} >
                            <Button
                                text='Log In'
                                width={"458px"}
                                height='58px'
                                onClick={() => console.log("Button Clicked")}
                                color={["#2699fb", "#134d7e"]}
                            // color = {["#a4c772", "#4e8400"]}
                            />
                        </div>


                        <hr className="left-line" />
                        <div style={{ marginLeft: "10px", display: "inline-block" }}>{"Or"}</div>
                        <hr className="right-line" />
                        <div style={{ marginTop: "80px" }}>
                            <GoogleLogin
                                clientId="1080303502452-90u0ouis2kuoljcr8o7mda2s2632i6l7.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                className='googleLogInStyles'
                            />
                            <div style={{ marginTop: "18px" }}>
                                <GoogleLogin
                                    clientId="1080303502452-90u0ouis2kuoljcr8o7mda2s2632i6l7.apps.googleusercontent.com"
                                    buttonText="Sign in with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    className='googleLogInStyles'
                                />
                            </div>
                            <div className="sign-up" style={{ paddingLeft: '64px', content: "center", marginTop: "89px" }}>
                                <div style={{ display: "inline-block" }}>Don't have an account yet?</div>
                                <div style={{ cursor: "pointer", display: "inline-block", color: "#5bb2fc" }}>Sign Up</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginPage;


