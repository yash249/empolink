import React, { Component } from 'react';
import '../Register/RegisterPage.scss'
import TextBox from '../../Components/TextField/Textfield'
import Button from '../../Components/Button/Button'

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div style={{ background: '#23286b', width: '100%', height: '100%', position: 'absolute' }}>
                    <h1 className="empolink">EmpoLink</h1>
                    <div style={{ float: 'right', background: 'white', width: '100%', height: '100%', width: '80%' }} >
                        <div style={{ marginLeft: '33.3%', marginRight: '33.3%', width: '100%', height: '100%', width: '33.33%' }}>
                            <TextBox
                                label={"First Name"}
                                onChange={(event) => this.setState({ username: event.target.value })}
                                value={this.state.username}
                                width={"100%"}
                                size="small"

                            />
                            <TextBox
                                label={"Last Name"}
                                onChange={(event) => this.setState({ username: event.target.value })}
                                value={this.state.username}
                                width={"100%"}
                                size="small"

                            />
                            <TextBox
                                label={"Company/BusinessName"}
                                onChange={(event) => this.setState({ username: event.target.value })}
                                value={this.state.username}
                                width={"100%"}
                                size="small"

                            />
                            <TextBox
                                label={"Mobile number"}
                                onChange={(event) => this.setState({ username: event.target.value })}
                                value={this.state.username}
                                width={"100%"}
                                size="small"

                            />
                            <TextBox
                                label={"Language(s)"}
                                onChange={(event) => this.setState({ username: event.target.value })}
                                value={this.state.username}
                                width={"100%"}
                                size="small"
                            />
                        <Button
                            text='Next'
                            width={"95%"}
                            height={40}
                            onClick={() => console.log("Button Clicked")}
                            color={["#2699fb", "#134d7e"]}
                        />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default RegisterPage;