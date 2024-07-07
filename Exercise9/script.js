
function checkAge(age) {
    console.log(age);
    if (age < 18) {
        console.log("You are under 18.");
        return "You are under 18.";
    } else if (age >= 18 && age < 65) {
        console.log("You are an adult.");
        return "You are an adult.";
    } else {
        console.log("You are  senior.");
        return "You are an senior.";
    }
}



export default checkAge;
