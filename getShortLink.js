const ConsoleReader = require('./ConsoleReader.js');
const axios = require('axios');
const ora = require('ora');
 
let spinner;


async function sendQueryToCleanUri(urlInroduced){
    spinner = ora('Пожалуйста одождите, запрос обрабатывается').start();
    await axios.post('https://cleanuri.com/api/v1/shorten', `url=${urlInroduced}`)
    .then(async (response) => {
        spinner.stopAndPersist({symbol: '👨‍💻'});
        console.log(`Короткая ссылка ${response.data.result_url}`);
    })
}

async function getUrl(){
    console.log('Введите длинный URL');
    const url = String(await ConsoleReader.getLine());
    sendQueryToCleanUri(url)
    .catch(err => {
        console.log(err);
    })
}

getUrl();