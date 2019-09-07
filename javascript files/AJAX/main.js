//Create an event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText(){
    //create the XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/file, async // OPEN function takes in 3 fields
    xhr.open('GET', 'Sample.txt', true);

    Console.log('READYSTATE', xhr.readyState);

    // xhr.onload = function(){
    //     if(xhr.status == 200){
    //         console.log(this.responseText);
    //     }
    // }

    

    //old way of onload: 
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }

    // ready state values
    // 0: request not intialised 
    // 1: server connection established 
    // 2: request recieved 
    // 3: proccessing request 
    // 4: request finished and response is ready


    //sends request
    xhr.send();
}