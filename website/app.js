// Personal API Key for OpenWeatherMap API
const apiKey = '0dfc83de93554651b37114843221606';
projectData.push(request.body);
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
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }
  postData('/addWeather', 
  {Weather:''})

postData('/add', {answer:42});

    method: 'POST', {
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}
const retrieveData = async (url='await') =>{ 
    const request = await fetch(url);
    try {
    // Transform into JSON
    const allData = await request.json()
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newWeather =  document.getElementById('weather').value;
getWeather(baseURL,newWeather, apiKey)

}
const getWeather = async (baseURL, weather, key)=>{

  const res = await fetch(baseURL+weather+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();