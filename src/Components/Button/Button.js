import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ContainedButtons = ({...props}) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        borderRadius: `${props.height * 0.178 + 'px'}`,
        background: `linear-gradient(180deg, ${props.color[0]} 0%, ${props.color[1]} 100%)`,
        height: props.height,
        width: props.width,
        textTransform: "none"
      }
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        <div
          // style={{
          //   cursor: "pointer",
          //   letterSpacing: "2.84px",
          //   lineHeight: "35px",
          //   fontSize: "30px",
          //   whiteSpace: "nowrap"
          // }}
        >
          {props.text}
        </div>
      </Button>
    </div>
  );
}

export default ContainedButtons
