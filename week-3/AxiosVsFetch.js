const axios=require("axios");

async function fetchData() {
    const response = await fetch("https://api.example.com/data", { method: "get" });
    const data = await response.json();
    console.log(data.length);
}

async function axiosData() {
    const response = await axios(
        {
            url: "https://api.example.com/data",
            method: "get",
            headers: 
            {
                "Content-Type": "application/json"
            }        
        }
    )
}

fetchData();
axiosData();