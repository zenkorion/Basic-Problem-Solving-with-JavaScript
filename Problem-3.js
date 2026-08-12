// Problem 3 : AI Token Cost Calculator

function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    if (tokensUsed > 500) {
        let proTokensUsed = Math.floor((tokensUsed - 500) / 100);
        let rate = proTokensUsed * 5;

        return rate;
    }
}

console.log(calculateAiCost());
