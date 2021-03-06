
var validPass = false;
var passLength = 0;
var passUpper = false;
var passNum = false;
var passSpecial = false;
var password = "";
var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '<', '>', '?'];
var numChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var seed = 0;

//getCriteria prompts the user for several password criteria, which the generated password will follow.

function getCriteria() {

    while (validPass == false) {

        passLength = prompt("How long should the password be? (# of characters, 8 min. 128 max.)");

        if (passLength < 8 || passLength > 128 || passLength === NaN) {
            alert("Not a valid password length.");
        } 

        else {
            passUpper = confirm("Use upper-case characters? (OK to confirm, Cancel to skip)");
            passNum = confirm("Use numbers? (OK to confirm, Cancel to skip)");
            passSpecial = confirm("Use special characters, like ! and @? (OK to confirm, Cancel to skip)");
            validPass = true;
        }

    }
}


//charGen generates a single random character following the specified criteria

function charGen (spec, up, num) {

    flipper = Math.floor(Math.random() * 100);

    if (spec == true && flipper >= 85) {
        seed = Math.floor(Math.random() * specChars.length);
        return specChars[seed];
    }

    else if (num == true && flipper <= 15) {
        seed = Math.floor(Math.random() * numChars.length);
        return numChars[seed];
    }

    else if (up == true && flipper <= 30 && flipper >= 15) {
        seed = Math.floor(Math.random() * upperChars.length);
        return upperChars[seed];
    } 
    
    else {
        seed = Math.floor(Math.random() * chars.length);
        return chars[seed];
    }

}


//makePassword initializes password, then calls getCriteria to receive the user's specifications, then runs charGen to generate random characters until done.

function makePassword() {
    
    password = "";
    getCriteria();

    for (var i = 0; i < passLength; i++) {
        password = (password + charGen(passSpecial, passUpper, passNum));
    }

    return password;
}


$("#passGen").on("click", function() {
    $("#passBox").text(makePassword());
})

