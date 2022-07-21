
// Personal API Key for OpenWeatherMap API
const apiKey = 'e9750fee0f207a49b7ac2e05dcee874d';
const baseURL='https://api.openweathermap.org/data/2.5/weather?zip='
/* Global Variables */
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const projectData = await response.json();
        console.log(projectData);
        return projectData;
      }catch(error) {
      console.log("error", error);
      }
  }
const retrieveData = async (url='') =>{ 
    const request = await fetch(url);
    try {
    // Transform into JSON
    const allData = await request.json()
   document.getElementById("date").innerHTML=allData.date;
   document.getElementById("temp").innerHTML=allData.temp+"C";
   document.getElementById("content").innerHTML=allData.feelings;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  e.preventDefault()
const newWeather =  document.getElementById('zip').value;
getWeather(baseURL,newWeather, apiKey)
.then((data)=>{
  // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
const feelings=document.getElementById('feelings').value
  postData("/add",{
   date:newDate,
  temp:data.main.temp, 
  feelings:feelings, 
  })
})
.then(()=>retrieveData("/all"))
}
const getWeather = async (baseURL, weather, key)=>{

  const res = await fetch(baseURL+weather+",us&appid="+key+"&units=metric")
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}


