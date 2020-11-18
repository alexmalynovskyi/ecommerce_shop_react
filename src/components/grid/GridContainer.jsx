import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function GridContainer ({ spacing= 2, children, className, ...props }) {
  const classes = useStyles();
  const gridContainerClassNames = classnames(classes.root, className)

  return <Grid container className={gridContainerClassNames} spacing={spacing} {...props}>
    {children}
  </Grid>
}
