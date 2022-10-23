import React from "react"; 
import axios from 'axios';

function App() {

const [data,setData] = React.useState('')

// State for editing the url with onChange event in inpute
const [location , setLocation] = React.useState('')


const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=APIKEY`


// function to get Api with axios which is triggered by event key with onKeyPress on input after geting data then setData
 function setlocation(event) { 
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }
       
 }

  return (
    <div className="App">

{/* blue wall */}
      <div className="min-h-screen w-full bg-sky-400  flex items-center justify-center after:">
       
 {/* white Main card */}
     <div className= " scale-75 md:scale-100  bg-white min-w-[25rem] min-h-[50rem] rounded-3xl shadow-div relative font-mono  ">

     {/* Input */}
        <div className="w-full flex items-center justify-center pt-12  ">
        <input   className = " shadow-div w-45 p-2 font-bold text-black border-white-400 border-4 rounded-3xl bg-transparent  "
         type="text" 
         placeholder="Enter Location" 
         value={location } 
         onChange = {(event) => setLocation(event.target.value)}
         onKeyPress = {setlocation}
          />
       </div>

  
        <div className="flex justify-between p-12 mt-5 h-80 ">


         <div className=" flex justify-between absolute w-full left-0 h-80 top-28 p-9 " >
           <div className="text-2xl ">
                <h1 className="text-3xl font-bold mb-2 ">{data.name}</h1>

                {data.main ?   <h1 className="font-semibold text-7xl"> {Math.floor(data.main.temp)}°C</h1> : null }
               
           </div>
           

            <div className="text-2xl mt-5 font-bold ">

            {data.weather ?  <h1 className="-rotate-90">{data.weather[0].description} </h1> : null }  
       
            </div>
</div>
             
            <div className="absolute bottom-7 left-0 text-2xl flex items-center justify-between p-5 w-full font-extrabold shadow-div">

                 <div className="m-2 text-center normal-shadow p-2 rounded-lg " >
                 {data.main ?    <h1 className="text-4xl">{data.main.feels_like.toFixed()}</h1> : null}
                       <p>Feels </p>
                 </div>
                  
                 <div className="m-2 text-center normal-shadow p-2 " >
                  {data.main ?   <h1 className="text-4xl">{data.main.humidity.toFixed()}</h1> :null}  
                  <p>Humidity</p>
                 </div>
                 
                 <div className="m-2 text-center normal-shadow p-2 " >
                   {data.wind ?    <h1 className="text-4xl">{data.wind.speed.toFixed()} </h1> : null}
                       <p>Winds</p>
                 </div>
            </div>
            

   
       </div>

</div>


</div> 

    </div>
  );
}

export default App;
