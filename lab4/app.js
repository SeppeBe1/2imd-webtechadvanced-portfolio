class App {
    constructor() {
        this.getWeather();
    }

    getWeather() {
        let latitude = -37.872194;
        let longitude = 175.68321;
        let key = "bcbebac378114c7cbdb0982444f834cf";
        let url = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${key}&include=minutly`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                let weather = json.data[0].weather.description;

                console.log(weather);

            });
        // .catch(error => {
        //     console.log(error);
        // });
    }
}

let app = new App();