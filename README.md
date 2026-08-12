# 🚀 JavaScript Basic Problem Solving

Welcome to the **JavaScript Basic Problem Solving** repository! This project contains solutions to 5 fundamental JavaScript programming problems, covering core concepts such as conditional logic, array iteration, data validation, and basic debugging.

---

## 📌 Table of Problems

| # | Problem Name | Description | Key Concepts Covered |
|---|---|---|---|
| **1** | **Match Winner** | Determines the winner of a match based on scores. | Conditional logic (`if/else`), Type checking |
| **2** | **Elevator Safety Checker** | Checks if the total weight of passengers exceeds the elevator's limit (400 kg). | Arrays, Loop iteration, Array sum |
| **3** | **AI Token Cost Calculator** | Calculates AI usage cost based on tokens consumed with tiered pricing. | Math functions (`Math.floor`), Range logic |
| **4** | **Top Rated Restaurant** | Finds and returns the restaurant with the highest rating in uppercase. | Array of Objects, Comparison logic |
| **5** | **API Response Time Monitor** | Calculates average response time while validating array items. | Nested validation, Loops, Mathematical average |

---

## 🛠️ Problem Details & Solutions Summary

### 1. Match Winner
Compares `teamAGoals` and `teamBGoals` to output `"Team A Won"`, `"Team B Won"`, or `"Draw"`.
- **Validation:** Ensures both inputs are numbers, otherwise returns `"Invalid"`.

### 2. Elevator Weight Safety Checker
Iterates through an array of weights and sums them up.
- **Safety Limit:** 400 kg. Returns `true` if safe, `false` if overloaded.
- **Validation:** Checks if the input is an array/object.

### 3. AI Token Cost Calculator
Calculates usage cost after a free tier threshold:
- **Free Tier:** First 500 tokens cost `$0`.
- **Paid Tier:** Every 100 tokens above 500 cost `$5`.
- **Validation:** Rejects negative values or non-number inputs.

### 4. Top Rated Restaurant Finder
Scans an array of restaurant objects to find the one with the highest rating.
- **Output:** Returns the top restaurant's name in UPPERCASE.
- **Validation:** Handles empty arrays and non-array inputs.

### 5. API Response Time Monitor (Debugging Challenge)
Calculates the average response time from an array of numbers.
- **Strict Validation:** Checks every item in the array to ensure all values are valid numbers before calculating the average.