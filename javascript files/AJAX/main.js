//Create an event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText(){
    // Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/file, async
    xhr.open('GET', '../../plain text files/sample.txt', true);
  
    console.log('READYSTATE: ', xhr.readyState);
  
    // OPTIONAL - used for loaders
    xhr.onprogress = function(){
      console.log('READYSTATE: ', xhr.readyState);
    }
  
    xhr.onload = function(){
      console.log('READYSTATE: ', xhr.readyState);
      if(this.status == 200){
        //console.log(this.responseText);
        document.getElementById('text').innerHTML = this.responseText;
      } 
      else if(this.status = 404){
        document.getElementById('text').innerHTML = 'Not Found';
      }
    }
    xhr.onerror = function(){
      console.log('Request Error...');
    }
  
    // xhr.onreadystatechange = function(){
    //   console.log('READYSTATE: ', xhr.readyState);
    //   if(this.readyState == 4 && this.status == 200){
    //     //console.log(this.responseText);
    //   }
    // }

    // Sends request
    xhr.send();
}



