// Based on 4-hbnb.js

document.addEventListener("DOMContentLoaded", function () {
    const stateCheckboxes = document.querySelectorAll(".states input[type='checkbox']");
    const cityCheckboxes = document.querySelectorAll(".cities input[type='checkbox']");
    const h4Locations = document.querySelector("div.locations h4");
    const searchButton = document.querySelector("button");

    const selectedStates = [];
    const selectedCities = [];

    function updateH4Locations() {
        h4Locations.textContent = "Locations: " + [...selectedStates, ...selectedCities].join(', ');
    }

    stateCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const stateId = checkbox.getAttribute("data-id");
            const stateName = checkbox.getAttribute("data-name");

            if (checkbox.checked) {
                selectedStates.push({ id: stateId, name: stateName });
            } else {
                const index = selectedStates.findIndex((state) => state.id === stateId);
                if (index !== -1) {
                    selectedStates.splice(index, 1);
                }
            }

            updateH4Locations();
        });
    });

    cityCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const cityId = checkbox.getAttribute("data-id");
            const cityName = checkbox.getAttribute("data-name");

            if (checkbox.checked) {
                selectedCities.push({ id: cityId, name: cityName });
            } else {
                const index = selectedCities.findIndex((city) => city.id === cityId);
                if (index !== -1) {
                    selectedCities.splice(index, 1);
                }
            }

            updateH4Locations();
        });
    });

    searchButton.addEventListener("click", function () {
    });
});
