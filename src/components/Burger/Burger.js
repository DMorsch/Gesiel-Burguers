import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredientes).map(
        igKey => {
            return [...Array(props.ingredientes[igKey])].map((_, i) =>{
               return <BurgerIngredient key={igKey + i} tipo={igKey}/>
            })
        }
    ).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p> Adicione algum ingrediente!</p>
    }
    console.log(transformedIngredients);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient tipo="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient tipo="bread-bottom"/>
        </div>
    );
}

export default burger;