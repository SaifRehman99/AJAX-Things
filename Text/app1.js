document.querySelector('.btn').addEventListener('click', (e) => {

    // creating a xhr object here
    const xhr = new XMLHttpRequest();

    // getting the file from here
    xhr.open('GET', 'file.txt', true);

    // ===================Method1==============================//

    // this method doesnt need readystate to be four

    // this need when something loading like a loader in the page
    xhr.onprogress = function () {
        console.log('Loading.....');
        console.log(this.readyState);
    }
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
        else if (this.status == 404) {
            console.log('No file found..!');


        }
    }

    // handle the error here
    xhr.onerror = function () {
        console.log('No file found..!');
    }

    // =======================Method2==========================//
    // this methods needs readystate to be four
    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText)
    //     }

    // }



    // sending the request here
    xhr.send();


})