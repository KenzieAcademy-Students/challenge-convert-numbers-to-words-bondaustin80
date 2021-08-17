// Your code here

let ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

let tens = ["", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"]

let special = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

function convertOnes(x) {
    let word = ""
    word = ones[x - 1]
    return word
}

function convertTens(x) {
    let word = ""
    word = tens[parseInt(x.toString().charAt(0))]
    console.log(word)
    if (parseInt(x.toString().charAt(1)) > 0) {
        word = word + "-" + convertOnes(parseInt(x.toString().charAt(1)))
    }
    return word
}

function convertHundreds(x) {
    let word = ""
    word = ones[x - 1] + "-hundred"
    return word
}

function convertSpecial(x){
    let word = ""
    word = special[x]
    return word
}

function displayFirstHundred() {
    let count = ""
    for (let i = 1; i <= 100; i++) {
        let number = i.toString()
        let word = ""
        if (i > 1) {
            count = count + ", "
        }
        if (number.length === 3) {
            count = count + convertHundreds(parseInt(number.charAt(0)))
        } else {
            if (number.length === 2) {
                if (number.charAt(0) === "1") {
                    count = count + convertSpecial(parseInt(number.charAt(1)))
                    continue //https://www.w3schools.com/jsref/jsref_continue.asp
                } else {
                    word = word + convertTens(parseInt(number))
                    count = count + word
                }
            } else {
                count = count + convertOnes(parseInt(number))
            }
        }
    }
    let display = document.createElement("p")
    display.innerText = count
    document.body.append(display)
}

displayFirstHundred()