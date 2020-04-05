class ShowTotalStatistic {
    
    totalStatistic = {
        country: 0,
        newConfirmed: 0,
        totalConfirmed: 0,
        newDeaths: 0,
        totalDeaths: 0,
        newRecovered: 0,
        totalRecovered: 0
    }

    get(){
        console.log(`
        Общая статистика по всему миру
        ------------------------------
        Новых заболевших: ${this.totalStatistic.newConfirmed}
        Всего заболевших: ${this.totalStatistic.totalConfirmed}
        Новых смертей: ${this.totalStatistic.newDeaths}
        Всего смертей: ${this.totalStatistic.totalDeaths}
        Новых выздоровевших: ${this.totalStatistic.newRecovered}
        Всего выздоровевших: ${this.totalStatistic.totalRecovered}
        `);
    }

    set(massive){
        for (let country of massive){
            this.totalStatistic.newConfirmed += country.NewConfirmed;
            this.totalStatistic.totalConfirmed += country.TotalConfirmed;
            this.totalStatistic.newDeaths += country.NewDeaths;
            this.totalStatistic.totalDeaths += country.TotalDeaths;
            this.totalStatistic.newRecovered += country.NewRecovered;
            this.totalStatistic.totalRecovered += country.TotalRecovered;
        }
    }

    show(obj){
        console.log(`
        Cтатистика по стране: ${obj.Country}
        ------------------------------
        Новых заболевших: ${obj.NewConfirmed}
        Всего заболевших: ${obj.TotalConfirmed}
        Новых смертей: ${obj.NewDeaths}
        Всего смертей: ${obj.TotalDeaths}
        Новых выздоровевших: ${obj.NewRecovered}
        Всего выздоровевших: ${obj.TotalRecovered}
        `);
    }
}

module.exports = ShowTotalStatistic;