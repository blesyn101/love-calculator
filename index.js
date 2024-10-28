document.getElementById('loveForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from reloading the page

    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

     // Generate a random love score between 0 and 100
 var loveScore = Math.floor(Math.random() * 101);  //To generate random number


   // Create a variable to store the result message
   let resultMessage = "";

    // Conditional logic to determine the love score message
if (loveScore >= 70) {
    resultMessage = name1 + " & " + name2 +", your love score is " + loveScore + "%. " + name2 + " loves you like romio loves juliet"; 
} else if (loveScore > 30) {
    resultMessage = name1 + " & " + name2 + ", your love score is " + loveScore + "%. Allowing unresolved resentment to linger may create a toxic atmosphere, but by engaging in honest and compassionate conversations, you will promote healing and renewal."; 
} else {
    resultMessage = name1 + " & " + name2 + ", your love score is " + loveScore + "%. " + name2 + " doesn't love you but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it."; 
}

document.getElementById("result").innerHTML = resultMessage;

});