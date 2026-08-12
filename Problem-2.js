// Problem 2 : Elevator Weight Safety Checker

function isElevatorSafe(weights) {
    if (typeof weights !== "object") {
        return "Invalid";
    }

    let totalWeights = 0;
    for (let i = 0; i <= weights.length - 1; i += 1) {
        totalWeights = totalWeights + weights[i];
    }

    if (totalWeights <= 400) {
        return true;
    } else {
        return false;
    }
}

console.log(isElevatorSafe());
