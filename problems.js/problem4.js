import inventory from "../data/js_car_data.js";
// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function getyears(){
    let years = [];
    for (const car of inventory){
        years.push(car.car_year);
    }
    return years;
}export default getyears;