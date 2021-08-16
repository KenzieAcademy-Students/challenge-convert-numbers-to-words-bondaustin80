// Your code here

//Basic

let ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

let tens = ["", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"]

let special = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

function displayFirstHundred() {
    let count = ""
    for (let i = 1; i <= 100; i++) {
        let number = i.toString()
        let word = ""
        if (i > 1) {
            count = count + ", "
        }
        if (number.length === 3) {
            count = count + "hundred"
        } else {
            if (number.length === 2) {
                if (number.charAt(0) === "1") {
                    count = count + (special[parseInt(number.charAt(1))])
                    continue //https://www.w3schools.com/jsref/jsref_continue.asp
                } else {
                    word = word + tens[parseInt(number.charAt(0))]
                    if (parseInt(number.charAt(1)) > 0) {
                        word = word + "-" + ones[parseInt(number.charAt(1)) - 1]
                    }
                    count = count + word
                }
            } else {
                count = count + ones[parseInt(number) - 1]
            }
        }
    }
    let display = document.createElement("p")
    display.innerText = count
    document.body.append(display)
}

displayFirstHundred()