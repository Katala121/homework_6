const ConsoleReader = require('./ConsoleReader.js');
const axios = require('axios');
const download = require('download');
const fs = require('fs-extra');
const ora = require('ora');
 
let spinner;

async function downloadFile(url){
    await download(url, 'img');
}

async function sendQueryToNASA(){
    console.log('Введите дату в формате YYYY-MM-DD');
    const date = String(await ConsoleReader.getLine());
    console.log('Введите количество случайных фото для скачивания');
    const photosNum = String(await ConsoleReader.getLine());
    spinner = ora('Пожалуйста подождите, запрос обрабатывается').start();
    axios.get(`https://apodapi.herokuapp.com/api/?date=${date}&absolute_thumbnail_url=true`)
    .then(response => {
        fs.emptyDir('./img/');
        downloadFile(response.data.url)
        .then(() => {
            axios.get(`https://apodapi.herokuapp.com/api/?count=${photosNum}`)
            .then(async (response) => {
                for(let apod of response.data){
                    await downloadFile(apod.url);
                }
            })
            spinner.stopAndPersist({symbol: '👨‍💻'});
           console.log('Downloaded photo');
        })
    })
}

sendQueryToNASA();