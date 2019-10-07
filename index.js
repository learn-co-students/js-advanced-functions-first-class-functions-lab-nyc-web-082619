const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function multipier(fare){
        return fare * int;
    }
}

function fareDoubler(fare){
    const doubled = fare * 2;
    return doubled;
}

function fareTripler(fare){
    const tripled = fare * 3;
    return tripled;
}

function selectDifferentDrivers(drivers, input){
    return input(drivers);

}