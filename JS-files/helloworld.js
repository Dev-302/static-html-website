//input
var gebruikersnaam = "Dev-302"
var wachtwoord = "Geheim"

//opslag
var opgeslagenUserName = "Dev-302"
var opgeslagenWachtwoord = "Geheim"

// if (true) DAN
// {
// DOE IK DIT
//}

if (gebruikersnaam !== opgeslagenUserName) {
    console.log("het mailadres is bij ons niet bekend");
} else if (wachtwoord !== opgeslagenWachtwoord) {
    console.log("dat wachtwoord klopt niet");
} else {
    console.log("Welkom");
}



if (gebruikersnaam === opgeslagenUserName) {
    if (
        wachtwoord === opgeslagenWachtwoord) {
        console.log("welkom");
    } else {
        console.log("dat wachtwoord klopt niet");
    }
} else {
    console.log("het mailadres is bij ons niet bekend")
}




if (
    gebruikersnaam === opgeslagenUserName &&
    wachtwoord === opgeslagenWachtwoord) {
    console.log("welkom");
}

/* this is how i can create a comment
across multiple lines! */

// These satatements are made up of only values
'hello world'
42
true
