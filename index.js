let text = document.getElementById("check-string");
let button = document.getElementById("check-btn");
button.addEventListener("click", checkPalindrome);

function checkPalindrome() {  

    let string = text.value;
    let len = string.length;
  
    for (let i = 0; i < len / 2; i++) {
        if (string[i] != string[len - 1 - i]){
            return alert("It is not a Palindrome");
        }else {
            return alert("It is a Palindrome");
          }
      }
}  