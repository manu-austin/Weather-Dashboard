        // Event listener for our cat-button
        $(".btn").on("click", function() {


            var cityName = $(".form-control").val();

            // save city on local storage
            $("#city1").text(cityName);
            localStorage.setItem("city1", cityName);


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
                $("#temperature").text((response.main.temp - 273.15).toFixed(1));
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

                var today = new Date();
                var dd1 = String(today.getDate() + 1).padStart(2, '0');
                var dd2 = String(today.getDate() + 2).padStart(2, '0');
                var dd3 = String(today.getDate() + 3).padStart(2, '0');
                var dd4 = String(today.getDate() + 4).padStart(2, '0');
                var dd5 = String(today.getDate() + 5).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0');
                var yyyy = today.getFullYear();

                forecastDay1 = mm + '/' + dd1 + '/' + yyyy;
                forecastDay2 = mm + '/' + dd2 + '/' + yyyy;
                forecastDay3 = mm + '/' + dd3 + '/' + yyyy;
                forecastDay4 = mm + '/' + dd4 + '/' + yyyy;
                forecastDay5 = mm + '/' + dd5 + '/' + yyyy;


                $("#day1").text(forecastDay1);
                $("#temperature1").text((response.list[1].main.temp - 273.15).toFixed(1));
                $("#humidity1").text(response.list[1].main.humidity);

                $("#day2").text(forecastDay2);
                $("#temperature2").text((response.list[2].main.temp - 273.15).toFixed(1));
                $("#humidity2").text(response.list[2].main.humidity);

                $("#day3").text(forecastDay3);
                $("#temperature3").text((response.list[3].main.temp - 273.15).toFixed(1));
                $("#humidity3").text(response.list[3].main.humidity);

                $("#day4").text(forecastDay4);
                $("#temperature4").text((response.list[4].main.temp - 273.15).toFixed(1));
                $("#humidity4").text(response.list[4].main.humidity);

                $("#day5").text(forecastDay5);
                $("#temperature5").text((response.list[5].main.temp - 273.15).toFixed(1));
                $("#humidity5").text(response.list[5].main.humidity);

            });
        });