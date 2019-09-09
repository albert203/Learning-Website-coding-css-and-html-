document.getElementById('button').addEventListener('click', getName);

function getName(){

    var name = document.getElementById('button').value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../../php files/process.php?name='+name, true);

    xhr.onload = function(){
        console.log(this.responseText);
    }
      xhr.send();
}

function postName(e){
    e.preventDefault();

    var name = document.getElementById('name2').value;
    var params = "name="+name;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../../php files/process.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.send(params);
}