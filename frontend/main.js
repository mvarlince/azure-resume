//Content is loaded > go and run the event getVisitCount
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter21.azurewebsites.net/api/GetResumeCounter?code=8QHamQPy/S8M8ITmDeJ2S/d4PXyoAKAnlHngD4iXO3PAhZ9HtaOwvA=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

// Javascript code that will grab the JSON that is provided from the API
// grab the correct part of that JSON and show it on HTM


const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText= count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}