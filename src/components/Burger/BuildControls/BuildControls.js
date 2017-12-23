import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', tipo: 'salad'},
    {label: 'Bacon', tipo: 'bacon'},
    {label: 'Cheese', tipo: 'cheese'},
    {label: 'Meat', tipo: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}> 
        <p><strong> Preço atual: {props.preco.toFixed(2)} </strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.tipo)}
            removed={() =>props.ingredientRemoved(ctrl.tipo)}
            desabilitado={props.desabilitado[ctrl.tipo]}/>
        ))}
        <button className={classes.OrderButton} disabled={!props.compravel}
        onClick={props.ordered}> ORDER </button>
    </div>
);

export default buildControls;