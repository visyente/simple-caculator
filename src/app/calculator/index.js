import React, { useEffect, useState, useCallback } from 'react';
import styles from '../page.module.css'
import CalculatorProvider, {calculatorContext} from './context';

function CalculatorManagement() {
  const { 
    nextValue, 
    prevValue, 
    handleOnclick
  } = calculatorContext();
  
  
  return (
      <div className={styles.center}>
          <div className={styles.gridContainer}>
            <div className={styles.gridItemDisplay}>{nextValue === "" ? prevValue : nextValue}</div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick('c')}>C</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick('\xB1')}>+/-</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick('%')}>%</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick('/')}>÷</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick(7)}>7</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick(8)}>8</button></div>  
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick(9)}>9</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick('*')}>x</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick(4)}>4</button></div>  
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick(5)}>5</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick(6)}>6</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick('-')}>-</button></div> 
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick(1)}>1</button></div>  
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick(2)}>2</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick(3)}>3</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick('+')}>+</button></div>
            <div className={styles.gridItem0}><button className={styles.gridButton0} onClick={() => handleOnclick(0)}>0</button></div>  
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick('.')}>.</button></div>
            <div className={styles.gridItem}><button className={styles.gridButton} onClick={() => handleOnclick('=')}>=</button></div> 
          </div>
        </div>
  )
}

export default function index() {
  return(
    <CalculatorProvider>
      <CalculatorManagement />
    </CalculatorProvider>
  )
};