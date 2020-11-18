import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({

}));

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ xs = 12, children, className, ...props }) => {
  const classes = useStyles();
  const gridContainerClassNames = classnames(classes.root, className)

  return (
    <Grid className={gridContainerClassNames} item xs={xs} {...props} >
      {children}
    </Grid>
  );
}
