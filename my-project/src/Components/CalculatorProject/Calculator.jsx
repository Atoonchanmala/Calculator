import { useState } from 'react';
import './Style.css';
const Calculator = () =>{
    const [inputCalculator,setInputCalculator] = useState('');

    const handleClick = (value) =>{
        setInputCalculator(inputCalculator + value);
    }

    const handleClear = () =>{
        setInputCalculator(' ');
    }

    const handleDelete = () =>{
        setInputCalculator(inputCalculator.slice(0,-1));
    }

    const handleEqual = () =>{
        try{
            setInputCalculator(eval(inputCalculator).toString());
        }
        catch(errorMessage){
            setInputCalculator(errorMessage);
        }
    }
  return (
    <div className='mx-auto max-w-md p-4 border-2 border-blue-400 rounded-md mt-5'>
      <h1 className="mt-5 mb-4 text-2xl font-semibold text-blue-900">Dev Calculator</h1>
      <div className='bg-rose-50 h-12 p-2 text-xl font-semibold border-2 border-blue-300 rounded-lg flex items-center justify-center'>
        {inputCalculator}
      </div>

      <div className='grid grid-cols-4 gap-3 mt-2'>
        <button className='buttonClear'onClick={handleClear}>Clear</button>
        <button className='buttonDelete'onClick={handleDelete}>Delete</button>
        <button className='buttonSymbol' onClick={() =>handleClick('.')}>.</button>  
        <button className='buttonSymbol'onClick={() =>handleClick('/')}>/</button>  
        <button className='button'onClick={() =>handleClick('7')}>7</button>  
        <button className='button'onClick={() =>handleClick('8')}>8</button>  
        <button className='button'onClick={() =>handleClick('9')}>9</button>  
        <button className='buttonSymbol'onClick={() =>handleClick('*')}>*</button>  
        <button className='button'onClick={() =>handleClick('4')}>4</button>  
        <button className='button'onClick={() =>handleClick('5')}>5</button>  
        <button className='button'onClick={() =>handleClick('6')}>6</button>  
        <button className='buttonSymbol'onClick={() =>handleClick('-')}>-</button>  
        <button className='button'onClick={() =>handleClick('1')}>1</button>  
        <button className='button'onClick={() =>handleClick('2')}>2</button>  
        <button className='button'onClick={() =>handleClick('3')}>3</button>  
        <button className='buttonSymbol'onClick={() =>handleClick('+')}>+</button>  
        <button className='button col-span-2'onClick={() =>handleClick('0')}>0</button>
        <button className='buttonSymbol col-span-2'onClick={handleEqual}>=</button>  
      </div>
    </div>
  );
};
export default Calculator;
