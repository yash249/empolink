import React, { Component } from 'react';
import '../Register/RegisterPage.scss'
import TextBox from '../../Components/TextField/Textfield'
import Button from '../../Components/Button/Button'
import { makeStyles } from "@material-ui/core/styles";
import Stepper from '../../Components/Stepper/Stepper';

class BusinessInfoPageTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: "",
            streetAddress: "",
            unitNumber: "",
            city: "",
            state: "",
            postalcode: "",
        }
    }

    render() {
        // const classes = useStyles();
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
                                    <div style = {{ paddingBottom: '133px'}} className="signUpSubHeading">Business Information</div>
                                </div>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <div style={{ paddingBottom: '18px' }}>
                                        <TextBox
                                            label={"Country *"}
                                            onChange={(event) => { this.setState({country: event.target.value})}}
                                            value={this.state.country}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            label={"Street Address *"}
                                            onChange={(event) => { this.setState({streetAddress: event.target.value})}}
                                            value={this.state.streetAddress}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            label={"Unit Number"}
                                            onChange={(event) => { this.setState({unitNumber: event.target.value})}}
                                            value={this.state.unitNumber}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            label={"City *"}
                                            onChange={(event) => { this.setState({city: event.target.value})}}
                                            value={this.state.city}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            label={"State/Province *"}
                                            onChange={(event) => { this.setState({state: event.target.value})}}
                                            value={this.state.state}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '47.5px' }} >
                                        <TextBox
                                            label={"Zip/Postal Code *"}
                                            onChange={(event) => { this.setState({postalcode: event.target.value})}}
                                            value={this.state.postalcode}
                                            width={"100%"}
                                        />
                                    </div>
                                </div>                             
                                <Button
                                    text='Next'
                                    width={"100%"}
                                    height='56px'
                                    onClick={() => console.log("Button Clicked")}
                                    color={["#2699fb", "#134d7e"]}
                                />
                                <div style={{ textAlign: 'center', paddingTop: '45px' }}>
                                    <Stepper
                                        steps={3}
                                        activeStep={1}
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

export default BusinessInfoPageTwo;