import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

function Stepper(props) {
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            background: "none",
            display: "inline-block"
        },
        dot: {
            height: 26,
            width: 26,
        }
    });
    const classes = useStyles();
    return (
        <MobileStepper
            variant="dots"
            steps={props.steps}
            position="static"
            activeStep={props.activeStep}
            classes={{
                root: classes.root,
                dot: classes.dot,
            }}
        />
    );
}

export default Stepper;
