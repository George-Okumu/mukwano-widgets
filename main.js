

const api = "https://agri.mukwano.com/locations/districts";

// Select org
// https://select2.org/getting-started/basic-usage
// Multi-boxes(pillbox);
// Person able to select more than 1 district;
// Console log the selected district ids in csv format.
const api_url = process.env.API_URL;
console.log(api_url)

$(function () {
    $(".js-example-responsive").select2({
        width: 'resolve'
    });
    fetch(api).then((res) => res.json())
        .then((data) => {
            console.log(data);
            $("#district-select").html(data.map((dat) => `
      <option value="${dat.id}">${dat.name}</option>
    `).join(''));
        })


    let selectedItems = [];
    $('#district-select').on("select2:select", function (e) {
        selectedItems.push(e.params.data.id);
    })


    // Eventhandler for button click
    $('#submit-btn').on("click", function () {
        if (!selectedItems.length) {
            danger.textContent = "Kindly select a district"
        } else {
            danger.textContent = "";
            console.log(selectedItems.join(', '));
        }
    });

});




