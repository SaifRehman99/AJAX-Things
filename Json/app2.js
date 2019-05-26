document.querySelector('.btn').addEventListener('click', (e) => {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            let result = '';
            result += `<ul>
            <li>Id: ${data.id}</li>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>`;
            document.querySelector('#json').innerHTML = result;
        }
    }

    xhr.send();

})

document.querySelector('.btn1').addEventListener('click', (e) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data1.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            let result = '';
            
            data.forEach((item) => {
                result += `<ul>
            <li>Id: ${item.id}</li>
            <li>Name: ${item.name}</li>
            <li>Email: ${item.email}</li>
            </ul>`;

            })

            document.querySelector('#json1').innerHTML = result;
        }
    }

    xhr.send();

})