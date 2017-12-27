import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import Botao from '../../UI/Botao/Botao'

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('OrderSummary render');
    }
    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredientes).map(
            igKey => {
                return <li key={igKey}> <span style={{textTransform: 'capitalize'}}>{igKey}: {this.props.ingredientes[igKey]}</span> </li>
            }
        );
    return(
    <Aux> 
        <h3> Your order </h3>
        <p> Your burger has the following ingredients: </p>
        <ul> 
            {ingredientSummary}
        </ul>
        <p> Total price: {this.props.price.toFixed(2)} </p>
        <p> Continue to checkout?</p>
        <Botao btnType="Danger" clicked={this.props.purchaseCanceled}> CANCEL </Botao>
        <Botao btnType="Success" clicked={this.props.purchaseContinued}> CONTINUE </Botao>
    </Aux>
    );
 }
};

export default OrderSummary;