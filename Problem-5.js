// Problem 5 : Debugging Challenge - API Response Time Monitor

function averageResponseTime(times) {
    if (typeof times !== "object" || times.length === 0) {
        return "Invalid";
    } else {
        for (let item of times) {
            if (typeof item !== "number") {
                return "Invalid";
            }
        }
    }
   

    let total = 0;
    for (let i = 0; i <= times.length - 1; i++) {
        total = total + times[i];
    }
    
    return total / times.length;
}

console.log(averageResponseTime());
