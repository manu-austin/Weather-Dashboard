        // Event listener for our cat-button
        $(".btn").on("click", function() {

            var cityName = $(".form-control").val();


            // Storing our giphy API URL for a random cat image
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=837d2d3fb19dcc5f4d0f563d1c4af81f";

            // Perfoming an AJAX GET request to our queryURL
            $.ajax({
                url: queryURL,
                method: "GET"
            })

            // After the data from the AJAX request comes back
            .then(function(response) {

                console.log(response.name);
                console.log(moment().format('L'));
                console.log((response.main.temp - 273.15).toFixed(2));
                console.log(response.main.humidity);
                console.log(response.wind.speed);

                // // Saving the image_original_url property
                // var imageUrl = response.data.image_original_url;

                // // Creating and storing an image tag
                // var catImage = $("<img>");

                // // Setting the catImage src attribute to imageUrl
                // catImage.attr("src", imageUrl);
                // catImage.attr("alt", "cat image");

                // // Prepending the catImage to the images div
                // $("#images").prepend(catImage);
            });
        });