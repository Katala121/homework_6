const ShowTotalStatistic = require('./ShowTotalStatistic.js');
const ConsoleReader = require('./ConsoleReader.js');
const axios = require('axios');
const ora = require('ora');
 
let spinner;

const showTotalStatistic = new ShowTotalStatistic();

async function getStatistic(){
    spinner = ora('Пожалуйста подождите, запрос обрабатывается').start();
    const statistic = await axios.get('https://api.covid19api.com/summary');
    spinner.stopAndPersist({symbol: '👨‍💻'});
    showTotalStatistic.set(statistic.data.Countries);
    showTotalStatistic.get();
}

//функция спрашивает название страны, выводит статистику укзанной страны
//функцию можно использовать, только без спинера, либо спинер останавливать другим методом
async function readCountryFromConsole(statistic){
    console.log('Введите название страны')
    const country = String(await ConsoleReader.getLine());
    if(country == 'exit') process.exit(0);
    for (let count of statistic.data.Countries) {
        if(count.Country == country){
            const showCountry = new ShowTotalStatistic();
            showCountry.show(count);
        }
    }
    readCountryFromConsole(statistic);
};

getStatistic();