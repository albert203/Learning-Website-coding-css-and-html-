document.getElementById('button').addEventListener('click', loadusers);

//load github users
function loadusers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true)

    xhr.onload = function(){
        if (this.status == 200){
            var users = JSON.parse (this.responseText);

            console.log(users);
            var output = '';
            for(i in users){
                output +=
                    '<div class = "user">' +
                    '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
                    '<ul>' +
                    '<li>ID: '+users[i].id+'</li>' +
                    '<li>Login: '+users[i].login+'</li>' +
                    '</ul>' +
                    '</div>';  
            }
            document.getElementById('users').innerHTML = output;     
        }
    }
    xhr.send();
}
