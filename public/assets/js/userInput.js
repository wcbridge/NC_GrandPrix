$(document).ready(function () {

    addF1Data();

    pickDriver();

    var name = $("#nameInput");
    var miles = $("#driveLength");
    var minutes = $("#driveTime");


    $(userInput).on("submit", function submitUserInput(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body or a title
        if (
            !name.val().trim() || !miles.val().trim() || !minutes.val().trim()
        ) {
            return;
        }
        var newPost = {
            name: name.val(),
            miles: miles.val(),
            minutes: minutes.val()
        }

        //console.log("HTML sending to SERVER", newPost);

        postUserInput(newPost);
    });

    function postUserInput(Post) {
        $.ajax({
            method: "POST",
            url: "/api/user/post",
            data: Post
        }).then(entry => {
            console.log("Finished Post ", entry)

        })
    }

    //Driver Pic On Page Load
        var id = 1
       
        //refers to img file to load pic
        $("#driverPic").attr("src", "./assets/img/Lewis Hamilton.jpg")

        //sends to server
        $.get("/api/drivers/" + id, function (data) {
            if (data) {
                console.log("DriverInfo Speed", data);
                return data;
            }
            //add catch for error and validation
        })

    //Add f1 data On Page Load
    var id = 1;

    $.get("https://ergast.com/api/f1/2018/" + id + "/results.JSON", function (data) {
        if (data) {
            console.log(data)

            $("#trackName").text(data.MRData.RaceTable.Races["0"].Circuit.circuitName);
            $("#trackIMG").attr("src", "./assets/img/" + id + ".png");

            $("#driver1").text(data.MRData.RaceTable.Races["0"].Results["0"].Driver.givenName);
            $("#team1").text(data.MRData.RaceTable.Races["0"].Results["0"].Constructor.name);
            $("#time1").text(data.MRData.RaceTable.Races["0"].Results["0"].Time.time);
            $("#points1").text(data.MRData.RaceTable.Races["0"].Results["0"].points);

            $("#driver2").text(data.MRData.RaceTable.Races["0"].Results["1"].Driver.givenName);
            $("#team2").text(data.MRData.RaceTable.Races["0"].Results["1"].Constructor.name);
            $("#time2").text(data.MRData.RaceTable.Races["0"].Results["1"].Time.time);
            $("#points2").text(data.MRData.RaceTable.Races["0"].Results["1"].points);

            $("#driver3").text(data.MRData.RaceTable.Races["0"].Results["2"].Driver.givenName);
            $("#team3").text(data.MRData.RaceTable.Races["0"].Results["2"].Constructor.name);
            $("#time3").text(data.MRData.RaceTable.Races["0"].Results["2"].Time.time);
            $("#points3").text(data.MRData.RaceTable.Races["0"].Results["2"].points);

            $("#driver4").text(data.MRData.RaceTable.Races["0"].Results["3"].Driver.givenName);
            $("#team4").text(data.MRData.RaceTable.Races["0"].Results["3"].Constructor.name);
            $("#time4").text(data.MRData.RaceTable.Races["0"].Results["3"].Time.time);
            $("#points4").text(data.MRData.RaceTable.Races["0"].Results["3"].points);

            $("#driver5").text(data.MRData.RaceTable.Races["0"].Results["4"].Driver.givenName);
            $("#team5").text(data.MRData.RaceTable.Races["0"].Results["4"].Constructor.name);
            $("#time5").text(data.MRData.RaceTable.Races["0"].Results["4"].Time.time);
            $("#points5").text(data.MRData.RaceTable.Races["0"].Results["4"].points);

            $("#driver6").text(data.MRData.RaceTable.Races["0"].Results["5"].Driver.givenName);
            $("#team6").text(data.MRData.RaceTable.Races["0"].Results["5"].Constructor.name);
            $("#time6").text(data.MRData.RaceTable.Races["0"].Results["5"].Time.time);
            $("#points6").text(data.MRData.RaceTable.Races["0"].Results["5"].points);

            $("#driver7").text(data.MRData.RaceTable.Races["0"].Results["6"].Driver.givenName);
            $("#team7").text(data.MRData.RaceTable.Races["0"].Results["6"].Constructor.name);
            $("#time7").text(data.MRData.RaceTable.Races["0"].Results["6"].Time.time);
            $("#points7").text(data.MRData.RaceTable.Races["0"].Results["6"].points);

            $("#driver8").text(data.MRData.RaceTable.Races["0"].Results["7"].Driver.givenName);
            $("#team8").text(data.MRData.RaceTable.Races["0"].Results["7"].Constructor.name);
            $("#time8").text(data.MRData.RaceTable.Races["0"].Results["7"].Time.time);
            $("#points8").text(data.MRData.RaceTable.Races["0"].Results["7"].points);

            $("#driver9").text(data.MRData.RaceTable.Races["0"].Results["8"].Driver.givenName);
            $("#team9").text(data.MRData.RaceTable.Races["0"].Results["8"].Constructor.name);
            $("#time9").text(data.MRData.RaceTable.Races["0"].Results["8"].Time.time);
            $("#points9").text(data.MRData.RaceTable.Races["0"].Results["8"].points);

            $("#driver10").text(data.MRData.RaceTable.Races["0"].Results["9"].Driver.givenName);
            $("#team10").text(data.MRData.RaceTable.Races["0"].Results["9"].Constructor.name);
            $("#time10").text(data.MRData.RaceTable.Races["0"].Results["9"].Time.time);
            $("#points10").text(data.MRData.RaceTable.Races["0"].Results["9"].points);

            $("#driver11").text(data.MRData.RaceTable.Races["0"].Results["10"].Driver.givenName);
            $("#team11").text(data.MRData.RaceTable.Races["0"].Results["10"].Constructor.name);
            $("#time11").text(data.MRData.RaceTable.Races["0"].Results["10"].Time.time);
            $("#points11").text(data.MRData.RaceTable.Races["0"].Results["10"].points);

            $("#driver12").text(data.MRData.RaceTable.Races["0"].Results["11"].Driver.givenName);
            $("#team12").text(data.MRData.RaceTable.Races["0"].Results["11"].Constructor.name);
            $("#time12").text(data.MRData.RaceTable.Races["0"].Results["11"].Time.time);
            $("#points12").text(data.MRData.RaceTable.Races["0"].Results["11"].points);

            $("#driver13").text(data.MRData.RaceTable.Races["0"].Results["12"].Driver.givenName);
            $("#team13").text(data.MRData.RaceTable.Races["0"].Results["12"].Constructor.name);
            $("#time13").text(data.MRData.RaceTable.Races["0"].Results["12"].Time.time);
            $("#points13").text(data.MRData.RaceTable.Races["0"].Results["12"].points);

            $("#driver14").text(data.MRData.RaceTable.Races["0"].Results["13"].Driver.givenName);
            $("#team14").text(data.MRData.RaceTable.Races["0"].Results["13"].Constructor.name);
            $("#time14").text(data.MRData.RaceTable.Races["0"].Results["13"].Time.time);
            $("#points14").text(data.MRData.RaceTable.Races["0"].Results["13"].points);

            $("#driver15").text(data.MRData.RaceTable.Races["0"].Results["14"].Driver.givenName);
            $("#team15").text(data.MRData.RaceTable.Races["0"].Results["14"].Constructor.name);
            $("#time15").text(data.MRData.RaceTable.Races["0"].Results["14"].Time.time);
            $("#points15").text(data.MRData.RaceTable.Races["0"].Results["14"].points);

            $("#driver16").text(data.MRData.RaceTable.Races["0"].Results["15"].Driver.givenName);
            $("#team16").text(data.MRData.RaceTable.Races["0"].Results["15"].Constructor.name);
            $("#time16").text(data.MRData.RaceTable.Races["0"].Results["15"].Time.time);
            $("#points16").text(data.MRData.RaceTable.Races["0"].Results["15"].points);

            $("#driver17").text(data.MRData.RaceTable.Races["0"].Results["16"].Driver.givenName);
            $("#team17").text(data.MRData.RaceTable.Races["0"].Results["16"].Constructor.name);
            $("#time17").text(data.MRData.RaceTable.Races["0"].Results["16"].Time.time);
            $("#points17").text(data.MRData.RaceTable.Races["0"].Results["16"].points);

            $("#driver18").text(data.MRData.RaceTable.Races["0"].Results["17"].Driver.givenName);
            $("#team18").text(data.MRData.RaceTable.Races["0"].Results["17"].Constructor.name);
            $("#time18").text(data.MRData.RaceTable.Races["0"].Results["17"].Time.time);
            $("#points18").text(data.MRData.RaceTable.Races["0"].Results["17"].points);

            $("#driver19").text(data.MRData.RaceTable.Races["0"].Results["18"].Driver.givenName);
            $("#team19").text(data.MRData.RaceTable.Races["0"].Results["18"].Constructor.name);
            $("#time19").text(data.MRData.RaceTable.Races["0"].Results["18"].Time.time);
            $("#points19").text(data.MRData.RaceTable.Races["0"].Results["18"].points);

            $("#driver20").text(data.MRData.RaceTable.Races["0"].Results["19"].Driver.givenName);
            $("#team20").text(data.MRData.RaceTable.Races["0"].Results["19"].Constructor.name);
            $("#time20").text(data.MRData.RaceTable.Races["0"].Results["19"].Time.time);
            $("#points20").text(data.MRData.RaceTable.Races["0"].Results["19"].points);

        }
    })
})

function pickDriver() {
    $("#driverName").on("change", function () {
        //pull from html
        var id = $("#driverName option:selected").attr("id")
        var name = $("#driverName option:selected").attr("value");
        console.log(id)
        console.log(name)

        //refers to img file to load pic
        $("#driverPic").attr("src", "./assets/img/" + name + ".jpg")

        //sends to server
        $.get("/api/drivers/" + id, function (data) {
            if (data) {
                console.log("DriverInfo Speed", data);
                return data;
            }
            //add catch for error and validation
        })
    })
}

function addF1Data() {
    //Track Img and Table Data Fill
    $('#trackSelect').on('change', function () {
        // alert( this.value );
        var id = this.value;

        $.get("https://ergast.com/api/f1/2018/" + id + "/results.JSON", function (data) {
            if (data) {
                console.log(data)

                $("#trackName").text(data.MRData.RaceTable.Races["0"].Circuit.circuitName);
                $("#trackIMG").attr("src", "./assets/img/" + id + ".png");

                $("#driver1").text(data.MRData.RaceTable.Races["0"].Results["0"].Driver.givenName);
                $("#team1").text(data.MRData.RaceTable.Races["0"].Results["0"].Constructor.name);
                $("#time1").text(data.MRData.RaceTable.Races["0"].Results["0"].Time.time);
                $("#points1").text(data.MRData.RaceTable.Races["0"].Results["0"].points);

                $("#driver2").text(data.MRData.RaceTable.Races["0"].Results["1"].Driver.givenName);
                $("#team2").text(data.MRData.RaceTable.Races["0"].Results["1"].Constructor.name);
                $("#time2").text(data.MRData.RaceTable.Races["0"].Results["1"].Time.time);
                $("#points2").text(data.MRData.RaceTable.Races["0"].Results["1"].points);

                $("#driver3").text(data.MRData.RaceTable.Races["0"].Results["2"].Driver.givenName);
                $("#team3").text(data.MRData.RaceTable.Races["0"].Results["2"].Constructor.name);
                $("#time3").text(data.MRData.RaceTable.Races["0"].Results["2"].Time.time);
                $("#points3").text(data.MRData.RaceTable.Races["0"].Results["2"].points);

                $("#driver4").text(data.MRData.RaceTable.Races["0"].Results["3"].Driver.givenName);
                $("#team4").text(data.MRData.RaceTable.Races["0"].Results["3"].Constructor.name);
                $("#time4").text(data.MRData.RaceTable.Races["0"].Results["3"].Time.time);
                $("#points4").text(data.MRData.RaceTable.Races["0"].Results["3"].points);

                $("#driver5").text(data.MRData.RaceTable.Races["0"].Results["4"].Driver.givenName);
                $("#team5").text(data.MRData.RaceTable.Races["0"].Results["4"].Constructor.name);
                $("#time5").text(data.MRData.RaceTable.Races["0"].Results["4"].Time.time);
                $("#points5").text(data.MRData.RaceTable.Races["0"].Results["4"].points);

                $("#driver6").text(data.MRData.RaceTable.Races["0"].Results["5"].Driver.givenName);
                $("#team6").text(data.MRData.RaceTable.Races["0"].Results["5"].Constructor.name);
                $("#time6").text(data.MRData.RaceTable.Races["0"].Results["5"].Time.time);
                $("#points6").text(data.MRData.RaceTable.Races["0"].Results["5"].points);

                $("#driver7").text(data.MRData.RaceTable.Races["0"].Results["6"].Driver.givenName);
                $("#team7").text(data.MRData.RaceTable.Races["0"].Results["6"].Constructor.name);
                $("#time7").text(data.MRData.RaceTable.Races["0"].Results["6"].Time.time);
                $("#points7").text(data.MRData.RaceTable.Races["0"].Results["6"].points);

                $("#driver8").text(data.MRData.RaceTable.Races["0"].Results["7"].Driver.givenName);
                $("#team8").text(data.MRData.RaceTable.Races["0"].Results["7"].Constructor.name);
                $("#time8").text(data.MRData.RaceTable.Races["0"].Results["7"].Time.time);
                $("#points8").text(data.MRData.RaceTable.Races["0"].Results["7"].points);

                $("#driver9").text(data.MRData.RaceTable.Races["0"].Results["8"].Driver.givenName);
                $("#team9").text(data.MRData.RaceTable.Races["0"].Results["8"].Constructor.name);
                $("#time9").text(data.MRData.RaceTable.Races["0"].Results["8"].Time.time);
                $("#points9").text(data.MRData.RaceTable.Races["0"].Results["8"].points);

                $("#driver10").text(data.MRData.RaceTable.Races["0"].Results["9"].Driver.givenName);
                $("#team10").text(data.MRData.RaceTable.Races["0"].Results["9"].Constructor.name);
                $("#time10").text(data.MRData.RaceTable.Races["0"].Results["9"].Time.time);
                $("#points10").text(data.MRData.RaceTable.Races["0"].Results["9"].points);

                $("#driver11").text(data.MRData.RaceTable.Races["0"].Results["10"].Driver.givenName);
                $("#team11").text(data.MRData.RaceTable.Races["0"].Results["10"].Constructor.name);
                $("#time11").text(data.MRData.RaceTable.Races["0"].Results["10"].Time.time);
                $("#points11").text(data.MRData.RaceTable.Races["0"].Results["10"].points);

                $("#driver12").text(data.MRData.RaceTable.Races["0"].Results["11"].Driver.givenName);
                $("#team12").text(data.MRData.RaceTable.Races["0"].Results["11"].Constructor.name);
                $("#time12").text(data.MRData.RaceTable.Races["0"].Results["11"].Time.time);
                $("#points12").text(data.MRData.RaceTable.Races["0"].Results["11"].points);

                $("#driver13").text(data.MRData.RaceTable.Races["0"].Results["12"].Driver.givenName);
                $("#team13").text(data.MRData.RaceTable.Races["0"].Results["12"].Constructor.name);
                $("#time13").text(data.MRData.RaceTable.Races["0"].Results["12"].Time.time);
                $("#points13").text(data.MRData.RaceTable.Races["0"].Results["12"].points);

                $("#driver14").text(data.MRData.RaceTable.Races["0"].Results["13"].Driver.givenName);
                $("#team14").text(data.MRData.RaceTable.Races["0"].Results["13"].Constructor.name);
                $("#time14").text(data.MRData.RaceTable.Races["0"].Results["13"].Time.time);
                $("#points14").text(data.MRData.RaceTable.Races["0"].Results["13"].points);

                $("#driver15").text(data.MRData.RaceTable.Races["0"].Results["14"].Driver.givenName);
                $("#team15").text(data.MRData.RaceTable.Races["0"].Results["14"].Constructor.name);
                $("#time15").text(data.MRData.RaceTable.Races["0"].Results["14"].Time.time);
                $("#points15").text(data.MRData.RaceTable.Races["0"].Results["14"].points);

                $("#driver16").text(data.MRData.RaceTable.Races["0"].Results["15"].Driver.givenName);
                $("#team16").text(data.MRData.RaceTable.Races["0"].Results["15"].Constructor.name);
                $("#time16").text(data.MRData.RaceTable.Races["0"].Results["15"].Time.time);
                $("#points16").text(data.MRData.RaceTable.Races["0"].Results["15"].points);

                $("#driver17").text(data.MRData.RaceTable.Races["0"].Results["16"].Driver.givenName);
                $("#team17").text(data.MRData.RaceTable.Races["0"].Results["16"].Constructor.name);
                $("#time17").text(data.MRData.RaceTable.Races["0"].Results["16"].Time.time);
                $("#points17").text(data.MRData.RaceTable.Races["0"].Results["16"].points);

                $("#driver18").text(data.MRData.RaceTable.Races["0"].Results["17"].Driver.givenName);
                $("#team18").text(data.MRData.RaceTable.Races["0"].Results["17"].Constructor.name);
                $("#time18").text(data.MRData.RaceTable.Races["0"].Results["17"].Time.time);
                $("#points18").text(data.MRData.RaceTable.Races["0"].Results["17"].points);

                $("#driver19").text(data.MRData.RaceTable.Races["0"].Results["18"].Driver.givenName);
                $("#team19").text(data.MRData.RaceTable.Races["0"].Results["18"].Constructor.name);
                $("#time19").text(data.MRData.RaceTable.Races["0"].Results["18"].Time.time);
                $("#points19").text(data.MRData.RaceTable.Races["0"].Results["18"].points);

                $("#driver20").text(data.MRData.RaceTable.Races["0"].Results["19"].Driver.givenName);
                $("#team20").text(data.MRData.RaceTable.Races["0"].Results["19"].Constructor.name);
                $("#time20").text(data.MRData.RaceTable.Races["0"].Results["19"].Time.time);
                $("#points20").text(data.MRData.RaceTable.Races["0"].Results["19"].points);



            }
        });
    })
}
