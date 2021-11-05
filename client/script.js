/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

function resolve_with_wait() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promise resolved");
    }, 1000);
    });
}

let jsonText = "";
let jokeStr = "hello";
async function clickedon() {
    let jokes = document.querySelector('#jokes');
    let num = parseInt(document.querySelector('#selNum').value);
    let cat = document.querySelector('#selCat').value;
    let lang = document.querySelector('#selLang').value;
    let id = parseInt(document.querySelector('#id').value);
    jokes.innerHTML = ""
    if (document.querySelector('#cbox').checked) {
        jsonText = await getId(num, cat,lang,id);
        jokeStr = jsonText
        jokes.innerHTML = jokeStr
    } 
    else {
        jsonText = await getNumber(num, cat,lang);
        jokeStr = jsonText
        if(cat == "chuck" & lang == "es"){
            jokes.innerHTML = jokeStr
        }
        else{
            for (let k in jokeStr) {
            var element = document.createElement("p")
            element.innerHTML = jokeStr[k]
            jokes.appendChild(element)
            }
            
        }
    }
}

async function getNumber(num, cat,lang) {
	let URL = 'https://warpig54.pythonanywhere.com/api/v1/jokes/'+cat+'/'+lang+'/'+num;
    let numberJson = await fetch(URL)
            .then(response => response.json())
            .catch(error=> console.log(error));
            return numberJson.text;

}

async function getId(num, cat,lang,id) {
	let URL = 'https://warpig54.pythonanywhere.com/api/v1/jokes/'+cat+'/'+lang+'/'+num+'/'+id;
	 let idJson = await fetch(URL)
            .then(response => response.json())
            .catch(error=> console.log(error));
            return idJson.text;

}

window.onload = function() {

};