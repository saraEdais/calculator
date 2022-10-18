import './App.css';
import react,{useState} from 'react';
import Buttons from './components/buttons';
import Result from './components/result';

function App() {
  const [result, setResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  // const [secondNumber, setSecondNumber] = useState("")
  const [operation, setOPeration] = useState("");
  let secondNumber="";

  const handelClick=(e)=>{
    const symbol=(e.target.innerText);

    if(!isNaN(parseInt(symbol))){
      setResult((result+parseInt(symbol)).toString());

    }
    else if (symbol==='c'){
      setResult(0);
    }
    else if(symbol==='+-'){
      setResult(result*-1);
    }
    else if(symbol==='.'){
      setResult(result+'.')
    }
    else if (symbol==='%'){
      setResult(parseFloat(result)/100.0)
    }
    else if(symbol==='+'){
      setFirstNumber(parseFloat(result))
      setOPeration(symbol)
      setResult(0);
    }
    else if(symbol==='-'){
      setFirstNumber(parseFloat(result))
      setOPeration(symbol)
      setResult(0);
    }
    else if(symbol==='x'){
      setFirstNumber(parseFloat(result))
      setOPeration(symbol)
      setResult(0);
    }
    else if(symbol==='/'){
      setFirstNumber(parseFloat(result))
      setOPeration(symbol)
      setResult(0);
    }
    else if(symbol==='='){
      // setSecondNumber(result)
      secondNumber=result;
      if(operation==="+"){
        setResult(((parseFloat(firstNumber)+parseFloat(secondNumber)).toFixed(10)).toString())
      }
      else if(operation==='-'){
        setResult(((parseFloat(firstNumber)-parseFloat(secondNumber)).toFixed(10)).toString())
      }
      else if(operation==='x'){
        setResult(((parseFloat(firstNumber)*parseFloat(secondNumber)).toFixed(10)).toString())
      }
      else if(operation==='/'){
        setResult(((parseFloat(firstNumber)/(parseFloat(secondNumber))).toFixed(10)).toString())
      }
    }


  }
  return (
    <div className="calc-style">
      <Result res={result}/>
      <Buttons handelClick={handelClick}/>
    </div>
  );
}

export default App;
