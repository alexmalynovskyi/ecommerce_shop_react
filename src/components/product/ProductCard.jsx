import Griditem from "../grid/Griditem";
import GridContainer from "../grid/GridContainer";
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  card: {
    backGround: '#fff',
    border: '1px solid #F1F1F1'
  },
  rightComponent: {
    textAlign: 'right',
    paddingRight: '10px'
  },
  price: {
    fontSize: '20px',
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
    borderBottom: '1px solid #F1F1F1'
  }
}));

export default function ProductCard({
  title,
  id,
  code,
  price,
  img,
  description,
  children
}) {
  const classes = useStyle();

  return (
    <GridContainer className={classes.card}>
      <Griditem xs={6}>
        <img src={img} alt="title"/>
      </Griditem>
      <Griditem xs={6}>
        <GridContainer className={classes.rightComponent}>
          <Griditem className={classes.price} xs={12}>
            <strong><span>{price} грн</span></strong>
          </Griditem>
          <Griditem xs={12}>
            counter
          </Griditem>
          <Griditem xs={12}>
            button add to cart
          </Griditem>
        </GridContainer>
        
      </Griditem>
      <Griditem xs={12}>
        Code: {code}
      </Griditem>
      <Griditem xs={12}>
        {title}
      </Griditem>
      <Griditem xs={12}>
        {description}
      </Griditem>
    </GridContainer>
  )
}