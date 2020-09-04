        var cityLattitude = 0;
        var cityLongitude = 0;

        // put back city list when we reload

        $(document).ready(function() {
            var listCityLength = localStorage.length;

            // loop going backward to keep the right way on the city list
            for (i = listCityLength; i > 0; i--) {
                var listCity = $(".table");
                var cityName = localStorage.getItem(i);
                var newCityName = $("<tr>" + cityName + "</tr>");
                newCityName.text(cityName);

                // It then adds this new tr to the table
                listCity.prepend(newCityName);
                newCityName.attr("class", "cityNameClass");
            }
        });



        // Event listener click on search button
        $(".btn").on("click", function() {



            var cityName = $(".form-control").val();

            var listCity = $(".table");
            var newCityName = $("<tr>" + cityName + "</tr>");
            newCityName.text(cityName);
            newCityName.attr("class", "cityNameClass");

            // adds this new tr to the table
            listCity.prepend(newCityName);

            // save city on local storage
            localStorage.setItem(localStorage.length + 1, cityName);


            // Storing our giphy API URL for a random cat image
            var queryURLCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=837d2d3fb19dcc5f4d0f563d1c4af81f";
            var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=837d2d3fb19dcc5f4d0f563d1c4af81f";
            var queryURLUV = ""

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

                cityLattitude = response.coord.lat;
                cityLongitude = response.coord.lon;

                console.log(cityLattitude + ";" + cityLongitude);
                queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=837d2d3fb19dcc5f4d0f563d1c4af81f&lat=" + cityLattitude + "&lon=" + cityLattitude;
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

            })

            // get uv index
            .then(() => {
                return $.ajax({
                    url: queryURLUV,
                    method: "GET"
                })

                // After the data from the AJAX request comes back
                .then(response => {

                    $("#uv").text(response.value);

                })
            })

        });

        // $(".table").on('click', 'tr', function() {
        //     $(".table").find('tr').click(function() {
        //         alert('You clicked row ' + ($(this).attr("cityNameClass")));
        //     });
        // });

        // Event listener click on on city
        // $(".table").on('click', 'tr', function(e) {
        //     e.preventDefault();
        //     var id = $(this).attr("cityNameClass");
        //     alert(id);
        // });
        // });