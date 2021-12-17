//Content is loaded > go and run the event getVisitCount
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})


const functionApi = '';

// Javascript code that will grab the JSON that is provided from the API
// grab the correct part of that JSON and show it on HTM


const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
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