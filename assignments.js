// ============================================
// IN-CLASS EXERCISE: CONTROL FLOW + OBJECTS
// ============================================
// RULES:
// 1. DO NOT create new variables unless instructed.
// 2. DO NOT create functions or loops.
// 3. Use ONLY if / else if / else or switch.
// 4. Use console.log() for all output.
// 5. Read object properties carefully.
// ============================================


// --------------------------------------------
// TASK 1: Cafeteria Menu Checker
// --------------------------------------------
const menuItem = "Sandwich";

// TODO:
// - Use a switch statement
// - Match the value of menuItem exactly
// - Use console.log() for output
// - Remember to use break for each case
//
// Expected outputs:
// "Sandwich is available"
// "Salad is available"
// "Juice is available"
// "Item not available"



// --------------------------------------------
// TASK 2: Exam Result Checker
// --------------------------------------------
const score = 75;

// TODO:
// - Use if / else if / else ONLY
// - Compare the score using >= and <
// - Print ONE message only
//
// Conditions:
// score >= 80 → "Excellent"
// score >= 60 and < 80 → "Good"
// score < 60 → "Needs Improvement"



// --------------------------------------------
// TASK 3: Traffic Light Advice
// --------------------------------------------
const signal = "green";

// TODO:
// - Use switch statement
// - Match lowercase values exactly ("red", "yellow", "green")
// - Include a default case
//
// Outputs:
// red → "Stop"
// yellow → "Get Ready"
// green → "Go"
// anything else → "Invalid signal"



// --------------------------------------------
// TASK 4: Student Performance Evaluator
// (OBJECT + CONTROL FLOW)
// --------------------------------------------
const student = {
  name: "Stacey",
  marks: 68,
  attendance: 85
};

// TODO:
// - Access object properties using dot notation
// - Use logical AND (&&)
// - Print the student's name in the message
//
// Conditions:
// marks >= 70 AND attendance >= 80 → "[name] is Promoted"
// marks >= 50 AND attendance >= 60 → "[name] is on Probation"
// otherwise → "[name] has to Repeat the Class"



// ============================================
// EXTENSION CHALLENGES (ADVANCED THINKING)
// ============================================
// These tasks require combining:
// - calculations
// - object access
// - multiple conditions
// ============================================


// --------------------------------------------
// EXTENSION 1: School Fee Clearance Checker
// --------------------------------------------
const feeStatus = {
  studentName: "Brian",
  totalFees: 50000,
  paidFees: 32000,
  deadlinePassed: false
};

// TODO:
// - Calculate remaining fees (totalFees - paidFees)
// - Store the result in a variable
// - Use if / else if / else
//
// Conditions:
// remaining === 0 → fully cleared
// deadlinePassed === true → NOT cleared
// otherwise → remind to clear before deadline



// --------------------------------------------
// EXTENSION 2: Online Order Status Tracker
// --------------------------------------------
const order = {
  orderId: "ORD1023",
  paymentStatus: "paid", // paid or pending
  shipped: false
};

// TODO:
// - Use logical AND (&&)
// - Check paymentStatus as a string
//
// Conditions:
// paid AND shipped → shipped message
// paid AND not shipped → being prepared
// otherwise → payment pending



// --------------------------------------------
// EXTENSION 3: Phone Battery Advisor
// --------------------------------------------
const phone = {
  brand: "Samsung",
  batteryLevel: 18,
  isCharging: false
};

// TODO:
// - Compare batteryLevel using <
// - Check charging status using boolean logic
//
// Conditions:
// low battery AND not charging
// low battery AND charging
// otherwise → sufficient battery



// --------------------------------------------
// EXTENSION 4: Employee Shift Assignment
// --------------------------------------------
const employee = {
  name: "Linda",
  role: "Security",
  hoursWorked: 10
};

// TODO:
// - You may use switch OR if / else
// - Combine role checks with hoursWorked
//
// Conditions:
// Security + hours >= 8 → rest shift
// Cleaner + hours < 6 → continue working
// otherwise → under review



// --------------------------------------------
// EXTENSION 5: Exam Eligibility Checker
// (NESTED OBJECT ACCESS)
// --------------------------------------------
const candidate = {
  name: "Kevin",
  academics: {
    attendance: 72,
    coursework: 55
  },
  feesCleared: true
};

// TODO:
// - Access nested properties using dot notation
// - Combine THREE conditions using &&
//
// Conditions:
// attendance >= 75
// coursework >= 50
// feesCleared === true



// --------------------------------------------
// EXTENSION 6: Weather Advisory System
// --------------------------------------------
const weather = {
  condition: "rainy", // sunny, rainy, cold
  temperature: 16
};

// TODO:
// - Use switch on condition
// - Use if / else INSIDE the rainy case
//
// Conditions:
// sunny → hydration message
// rainy + temperature < 18 → jacket message
// rainy + temperature >= 18 → umbrella message
// cold → dress warmly
// default → unavailable data
