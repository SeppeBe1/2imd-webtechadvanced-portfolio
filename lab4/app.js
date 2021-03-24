class App {
    constructor() {
        // this.getWeather();
        this.getLotrChar();

    }

    getWeather() {
        const latitude = -37.872194;
        const longitude = 175.68321;
        const key = "bcbebac378114c7cbdb0982444f834cf";
        let url = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${key}&include=minutly`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                let weather = json.data[0].weather.description;
                console.log(weather);
            })
            .catch(error => {
                console.log(error);
            });
    }

    getLotrChar() {
        let characters = [];
        let randomChar = Math.floor(Math.random() * 11);
        //  https://cors-anywhere.herokuapp.com/
        let url = `https://cors-anywhere.herokuapp.com/https://the-one-api.dev/v2/character?race=Hobbit`;
        fetch(url, {
                method: 'get',
                contentType: 'application/json',
                headers: new Headers({
                    'Authorization': 'Bearer IeO9joYB81rrkjm0TQ64'
                })
            })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                // let weather = json.data[0].weather.description;
                // console.log(json);
            })
            .catch(error => {
                // console.log(error);
            });;
    }
}



let app = new App();