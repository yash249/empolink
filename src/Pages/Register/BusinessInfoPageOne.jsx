import React, { Component } from 'react';
import '../Register/RegisterPage.scss'
import TextBox from '../../Components/TextField/Textfield'
import Button from '../../Components/Button/Button'
import Stepper from '../../Components/Stepper/Stepper';
import { withRouter } from 'react-router-dom';

class BusinessInfoPageOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            companyName: "",
            mobileNumber: "",
            languages: "",
        }
    }

    onNextClicked(){
        this.props.history.push('/register/3');
    }

    render() {
        return (
            <>
                <div style={{ width: '100%', height: '1080px', position: 'absolute' }}>
                    <div style={{ background: '#23286b', width: '24.16%', height: '100%', position: 'absolute' }}>
                        <h1 className="empolink-heading">EmpoLink</h1>
                    </div>
                    <div style={{ float: 'right', background: 'white', width: '100%', height: '100%', width: '75.84%' }} >
                        <div style={{ marginLeft: '34.27%', marginRight: '34.27%', height: '100%', width: '31.46%' }}>
                            <div>
                                <div>
                                    <h1 className="signUpHeading">Sign Up</h1>
                                    <div className="signUpSubHeading">Business Information</div>
                                </div>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <div style={{ paddingBottom: '18px' }}>
                                        <TextBox
                                            required={true}
                                            label={"First Name"}
                                            onChange={(event) => { this.setState({firstName: event.target.value})}}
                                            value={this.state.firstName}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            required={true}
                                            label={"Last Name"}
                                            onChange={(event) => { this.setState({lastName: event.target.value})}}
                                            value={this.state.lastName}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            required={true}
                                            label={"Company/BusinessName"}
                                            onChange={(event) => { this.setState({companyName: event.target.value})}}
                                            value={this.state.companyName}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            label={"Mobile number"}
                                            onChange={(event) => { this.setState({mobileNumber: event.target.value})}}
                                            value={this.state.mobileNumber}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '47px' }} >
                                        <TextBox
                                            label={"Language(s)"}
                                            onChange={(event) => { this.setState({languages: event.target.value})}}
                                            value={this.state.languages}
                                            width={"100%"}
                                        />
                                    </div>
                                </div>
                                <Button
                                    text='Next'
                                    width={"100%"}
                                    height='56px'
                                    onClick = {() => this.onNextClicked()}
                                    color={["#2699fb", "#134d7e"]}
                                />
                                <div style={{ textAlign: 'center', paddingTop: '47px' }}>
                                    <Stepper
                                        steps = {3}
                                        activeStep = {0}
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(BusinessInfoPageOne);