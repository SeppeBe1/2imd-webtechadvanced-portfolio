class App {
    constructor() {
        this.latgitude = -37.872194;
        this.longitude = 175.68321;
        this.getWeather;
    }

    getWeather() {
        let key = "bcbebac378114c7cbdb0982444f834cf";
        let url = `https://api.weatherbit.io/v2.0/current?lat=${this.latgitude}&lon=${this.longitude}&key=${key}&include=hourly`;
        fetch(url)
            .then(response => {
                console.log(response);
                response.json;
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

let app = new App();