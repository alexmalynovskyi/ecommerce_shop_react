import GridContainer from "../components/grid/GridContainer";
import Griditem from "../components/grid/Griditem";
import { makeStyles } from '@material-ui/core/styles';
import Product from "../components/product/Product";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '100px'
  }
}));

export default function Homepage(props) {
  const classes = useStyles();

  return <GridContainer className={classes.container}>
    <Griditem xs={3}>filter section</Griditem>
    <Griditem xs={9}>
      <Product></Product>
    </Griditem>
  </GridContainer>
}