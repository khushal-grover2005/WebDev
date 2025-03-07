import { useState } from 'react'


function App()
{
  const holder = { width: 1600, height:1200, backgroundColor: "gray", display: "flex" ,justifyContent: "center"};
  return (
    <div style={holder}>
      <div>
        <div>
          <Post name={"khush"}
                followers={"23000 followers"}
                time={"12min ago"}
          />
        </div>
        <div style={{marginTop:5}}>
          <Post name={"khush"}
                followers={"23000 followers"}
          />
        </div>
      </div>
    </div>
  )
}

function Post(props)
{
  const style = { width: 400, height:100, backgroundColor: "white", display: "flex", borderRadius:20};

  return( 
  <div style={style}>
    <img style={{width:30 , height:30,marginRight: 5,marginLeft:7,marginTop:5,borderRadius:20}}src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" />
    {props.time!==undefined && <div style={{fontSize: 10}}>
      <div><b>{props.name}</b></div>
      <div>{props.followers}</div> 
      <div>{props.time}</div>
    </div>}
    
    {props.time===undefined && <div style={{fontSize: 10}}>
      <div><b>{props.name}</b></div>
      <div>promoted</div>
    </div>}
  </div>
  )
}

export default App
