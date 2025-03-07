import { useEffect,useState } from "react";

function Counter(props)
{
  return(
    <div>{props.count}</div>
  )
}


function App()
{
  const[count,setCount]=useState(0);
  const[visible,setVisible]=useState(true);

  useEffect(()=>{
    const interval=setInterval(function()
    {
      setCount(count=>count+1)
    },1000)

    return function()
    {
      clearInterval(interval);
    }
  },[])

  useEffect(()=>{
    const interval=setInterval(function()
    {
      setVisible(visible=> !visible)
    },5000)

    return function()
    {
      clearInterval(interval);
    }
  },[])

  return(
    <div>{visible && <Counter count={count}></Counter>}
    </div>
  )
}

export default App;