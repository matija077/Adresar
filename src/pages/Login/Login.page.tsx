import React from "react";

import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "75%",
    },
    flexItems: {
        '&>:not(:first-child)': {
            marginTop: "1rem"
        },
        '&>:not(:last-child)': {
            marginBottom: "1rem"
        }
    }
  }),
);

type LoginPropsType = {
    children?: React.ReactNode
}

function Login(props: LoginPropsType) {
    const classes = useStyles();

    return (
        <Container component="main" className={classes.root}>
            <form

            >
                <Grid container className={classes.flexItems}>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        fullWidth
                    ></TextField>
                    <TextField
                        required
                        id="name"
                        label="Email"
                        fullWidth
                    ></TextField>
                    <TextField
                        fullWidth
                        id="error"
                        InputProps={{
                            readOnly: true,
                          }}
                    ></TextField>
                    <Box width="100%" component="aside">
                          <Paper>

                          </Paper>
                    </Box>
                    <Button variant="contained">Submit</Button>
                </Grid>
            </form>
        </Container>
    );
}

export default Login