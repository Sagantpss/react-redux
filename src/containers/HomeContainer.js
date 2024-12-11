import { connect } from 'react-redux';
import ReactreduxHome from '../components/ReactreduxHome';
import {addToCart} from '../services/actions/action';

const mapStateToProps=state=>({
    cardItems:state
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(ReactreduxHome);

// export default ReactreduxHome; 