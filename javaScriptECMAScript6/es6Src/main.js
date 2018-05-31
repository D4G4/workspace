'use strict'

//Promises

//var myPromise = new Promise( (resolve, reject) =>
var myPromise = new Promise( (resolveMethod, reject) =>
  setTimeout(() => resolveMethod(4), 2000)
);

myPromise.then( (res) => console.log(res));


function getData(method, url){
  return new Promise( (resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      self = this;
        if(self.status >= 200 && self.status < 300){
          resolve(xhr.response);
        }else{
          reject({
            status: self.status,
            statusText: xhr.statusText
          });
        }
    };//end of onLoad

    xhr.onerror =  () => {
      reject({
        status: self.status,
        statusText: xhr.statusText
      });
    }; //end of onerror
    xhr.send();
  }); //end of return
}


function getData1(method, url){
  return new Promise( function (resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      }else{
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function(){
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}


getData('GET', 'http://jsonplaceholder.typicode.com/todos')
.then( (data) => {
  let todos = JSON.parse(data);
  let output = '';

  for(let todo of todos){
    output += `
      <li>
        <h3>${todo.title}</h3>
        <p> COMPLETED<: ${todo.completed}/p>
      </li>
    `;
  }

  document.getElementById('template').innerHTML = output;
  console.log('Printing data');
  console.log(data);
}).catch( (error) => {
  console.log('on error');
  console.log(error);
});
