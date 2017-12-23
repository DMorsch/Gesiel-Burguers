import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Botao from '../../UI/Botao/Botao'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredientes).map(
        igKey => {
            return <li key={igKey}> <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredientes[igKey]}</span> </li>
        }
    );

    return(
    <Aux> 
        <h3> Your order </h3>
        <p> Your burger has the following ingredients: </p>
        <ul> 
            {ingredientSummary}
        </ul>
        <p> Total price: {props.price.toFixed(2)} </p>
        <p> Continue to checkout?</p>
        <Botao btnType="Danger" clicked={props.purchaseCanceled}> CANCEL </Botao>
        <Botao btnType="Success" clicked={props.purchaseContinued}> CONTINUE </Botao>
    </Aux>
    );
};

export default orderSummary;