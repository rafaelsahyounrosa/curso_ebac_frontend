document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/rafaelsahyounrosa')
        .then(function(resposta){
            if(!resposta.ok){
                alert("O usuário configurado não foi encontrado.");
            }

            return resposta.json();
        })
        .then(function(json){
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            seguidoresElement.innerText = json.followers;
            seguindoElement.innerText = json.following;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function(error){
            alert(error.message);
        })
})