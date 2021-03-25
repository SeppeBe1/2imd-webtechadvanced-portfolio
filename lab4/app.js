class App {
    constructor() {
        this.getWeather();
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
                console.log(json);
                let weather = json.data[0].weather.description;
                if (/clear/i.test(weather) || /cloud/i.test(weather)) {
                    document.querySelector("#what").innerHTML = "Go on vacation to the shire"
                    document.querySelector("#ad").style.backgroundImage = "url('res/hobbiton.jpg')";

                } else if (/rain/i.test(weather)) {
                    document.querySelector("#what").innerHTML = "Have fun and watch lord of the rings on Netflix"
                    document.querySelector("#ad").style.backgroundImage = "url('res/fellowship.jpg')";
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    getLotrChar() {

        // 12(precious) 149(take them down) 738(for gondor!) 536(what of the wizard)
        //  https://cors-anywhere.herokuapp.com/
        let url = `https://cors-anywhere.herokuapp.com/https://the-one-api.dev/v2/quote/`;
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
                let randomChar = Math.floor(Math.random() * 4);
                let dialogs = [12, 149, 738, 536]
                let quote = json.docs[dialogs[randomChar]].dialog;
                switch (randomChar) {
                    case 0:
                        document.querySelector("#fellowship").src = "res/smeagol.png";
                        document.querySelector("#quote").innerHTML = quote;
                        console.log(quote);
                        break;
                    case 1:
                        document.querySelector("#fellowship").src = "res/sam.png";
                        document.querySelector("#quote").innerHTML = quote;
                        console.log(quote);
                        break;
                    case 2:
                        document.querySelector("#fellowship").src = "res/aragorn.png";
                        document.querySelector("#quote").innerHTML = quote;
                        console.log(quote);
                        break;
                    case 3:
                        document.querySelector("#fellowship").src = "res/gandalf.png";
                        document.querySelector("#quote").innerHTML = quote;
                        console.log(quote);
                        break;
                }
                // let weather = json.data[0].weather.description;
                // console.log(json);
            })
            .catch(error => {
                // console.log(error);
            });;
    }
}




let app = new App();