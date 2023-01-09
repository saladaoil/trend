import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";

const useStyles = makeStyles(theme => ({
    link: {
      textDecoration: "none"
    }
  }));
  
  const ListView = props => {
    const classes = useStyles();
    const items = {
      "0": "JSes6",
      "1": "React",
      "2": "Firebase"
    };
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box textAlign="center">
            <Button variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </Grid>
        {Object.keys(items).map(ky => (
          <Grid item key={ky}>
            <Link to={`/detail/${ky}`} className={classes.link}>
              <MediaCard title={items[ky]} />
            </Link>
          </Grid>
        ))}
      </React.Fragment>
    );
  };
  
  export default ListView;