document.querySelector('.btn').addEventListener('click',(e)=>{

    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.github.com/users',true);

    xhr.onload = function(){
        if(this.status === 200){
            let data = JSON.parse(this.responseText);

            let result = '';
            
            data.forEach((item)=>{
                result += `<div class='users'>
                <img src=${item.avatar_url} width='70' height = '70'>
                <ul><li>ID : ${item.id}</li>
                <li>Login : ${item.login}</li>
                </ul></div>`
            })
            document.querySelector('.div').innerHTML = result;
        }
    }

    xhr.send()
})