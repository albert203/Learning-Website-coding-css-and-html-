document.getElementById('button1').addEventListener('click', loaduser);
document.getElementById('button2').addEventListener('click', loadusers);

function loaduser(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../../json files/user.json', true);

    xhr.onload = function(){
    if(xhr.status == 200){
        var user = JSON.parse(this.responseText);
          
        var output = '';

        output += '<ul>' +
        '<li>ID: '+user.id+'</li>' +
        '<li>Name: '+user.name+'</li>' +
        '<li>Email: '+user.email+'</li>' +
        '</ul>';

        document.getElementById('user').innerHTML = output;
        }
      }
      xhr.onerror = function(){
        console.log('Request Error...');
      }
      xhr.send();
    }

function loadusers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../../json files/users.json', true);

    xhr.onload = function(){
    if(xhr.status == 200){
        var users = JSON.parse(this.responseText);
          
        var output = '';
          
        for(var i in users){
        output += '<ul>' +
            '<li>ID: '+users[i].id+'</li>' +
            '<li>Name: '+users[i].name+'</li>' +
            '<li>Email: '+users[i].email+'</li>' +
            '</ul>';
          }

        document.getElementById('users').innerHTML = output;
        }
      }
      xhr.send();
    }
