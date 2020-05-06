
var validPass = false;
var passLength = 0;
var passLower = false;
var passUpper = false;
var passSpecial = false;
var password = "";
var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '<', '>', '?'];
var seed = 0;

function getCriteria() {

    while (validPass == false) {

        passLength = prompt("How long should the password be? (# of characters, 8 min. 128 max.)");

        if (passLength < 8 || passLength > 128 || passLength === NaN) {
            alert("Not a valid password length.");
        } 

        else {
            passUpper = confirm("Use upper-case characters? (OK to confirm, Cancel to skip)");
            passSpecial = confirm("Use special characters, like ! and @? (OK to confirm, Cancel to skip)");
            validPass = true;
        }

    }
}

function charGen (spec, up) {

    flipper = Math.floor(Math.random() * 100);

    if (spec == true && flipper >= 90) {
        seed = Math.floor(Math.random() * specChars.length);
        return specChars[seed];
    }

    else if (up == true && flipper >= 75) {
        seed = Math.floor(Math.random() * upperChars.length);
        return upperChars[seed];
    } 
    
    else {
        seed = Math.floor(Math.random() * chars.length);
        return chars[seed];
    }

}

function makePassword() {
    
    getCriteria();
    for (var i = 0; i < passLength; i++) {
        password = (password + charGen(passSpecial, passUpper));
    }

    return password;
}

$("#passGen").on("click", function() {
    $("#passBox").text(makePassword());
})

