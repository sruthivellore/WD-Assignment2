function reverseString() {
    let input = document.getElementById("userInput1").value;
    let reversed = input.split("").reverse().join("");
    document.getElementById("output1").textContent = "Output : " + reversed;
}
function checkPalindrome() {
    let input = document.getElementById("userInput2").value;
    
    // Check if input is a valid number
    if (!/^\d+$/.test(input)) {
        document.getElementById("output2").textContent = "❌ Please enter only numbers!";
        return;
    }

    let reversed = input.split("").reverse().join("");
    
    if (input === reversed) {
        document.getElementById("output2").textContent = "✅ It's a palindrome!";
    } else {
        document.getElementById("output2").textContent = "❌ Not a palindrome!";
    }
}
function calculateTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    
    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal <= 0 || tipPercentage < 0) {
        document.getElementById("totalOutput").textContent = "❌ Please enter valid values.";
        return;
    }

    let tipAmount = (subtotal * tipPercentage) / 100;
    let totalAmount = subtotal + tipAmount;

    document.getElementById("totalOutput").textContent = `💰 Total Amount (including tip): $${totalAmount.toFixed(2)}`;
}
