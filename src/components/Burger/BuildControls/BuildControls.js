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
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.tipo)}/>
        ))}
    </div>
);

export default buildControls;