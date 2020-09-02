        // Event listener for our cat-button
        $(".btn").on("click", function() {

            var cityName = $(".form-control").val();

            // Storing our giphy API URL for a random cat image
            var queryURLCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=837d2d3fb19dcc5f4d0f563d1c4af81f";
            var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=837d2d3fb19dcc5f4d0f563d1c4af81f";

            // Perfoming an AJAX GET request to our queryURL
            $.ajax({
                url: queryURLCurrent,
                method: "GET"
            })

            // After the data from the AJAX request comes back
            .then(function(response) {
                $("#cityName").text(response.name + " (" + moment().format('L') + ")");
                $("#temperature").text((response.main.temp - 273.15).toFixed(2));
                $("#humidity").text(response.main.humidity);
                $("#wind").text((response.wind.speed / 1.609344).toFixed(2));

            })



            // Perfoming an AJAX GET request to our queryURL

            $.ajax({
                url: queryURLForecast,
                method: "GET"
            })

            // After the data from the AJAX request comes back
            .then(response => {

                console.log(moment().add(1, 'days').calendar());
                console.log((response.list[1].main.temp - 273.15).toFixed(2));
                console.log(response.list[1].main.humidity);

            });
        });