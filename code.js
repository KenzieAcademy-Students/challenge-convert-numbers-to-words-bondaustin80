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
    if (parseInt(x.toString().charAt(1)) > 0) {
        if (parseInt)
        word = word + "-" + convertOnes(parseInt(x.toString().charAt(1)))
    } 
    return word
}

function convertHundreds(x) {
    let number = x.toString()
    let word = ""
    word = ones[parseInt(number.charAt(0)) - 1] + "-hundred"
    if (parseInt(number.charAt(1)) > 0) {
        if (parseInt(number.charAt(1)) === 1) {
            word = word + "-" + convertSpecial(parseInt(number.substring(2))) //https://www.w3schools.com/jsref/jsref_substring.asp
        } else {
            word = word + "-" + convertTens(parseInt(number.substring(1)))
        }
    }
    return word
}

function convertThousands(x) {
    let number = x.toString()
    let word = ""
    if (number.length === 4) {
        word = word + convertOnes(parseInt(number.substring(0,1))) + "-thousand"
    } else if (number.length === 5) {
        if (parseInt(number.charAt(0)) === 1) {
            word = convertSpecial(parseInt(number.charAt(1))) + "-thousand"
            number = number.substring(1)
        } else {
            word = word + convertTens(parseInt(number.substring(0,2))) + "-thousand"
            number = number.substring(1)
        }
    } else if (number.length === 6) {
        word = word + convertHundreds(parseInt(number.substring(0,3))) + "-thousand"
        number = number.substring(2)
    }
    if (parseInt(number.charAt(1)) > 0) {
        word = word + "-" + convertHundreds(parseInt(number.substring(1)))
    } else if (parseInt(number.charAt(2) === 1)) {
        word = word + "-" + convertSpecial(parseInt(number.substring(3)))
    } else if (parseInt(number.charAt(2)) > 2) {
        word = word + "-" + convertTens(parseInt(number.substring(2)))
    } else if (parseInt(number.charAt(3)) > 0) {
        word = word + "-" + convertOnes(parseInt(number.substring(3)))
    }
    return word
}
console.log(convertThousands(257933))

function convertSpecial(x){
    let word = ""
    word = special[x]
    return word
}

function displayWords() {
    let count = ""
    for (let i = 1; i <= 100000; i++) {
        let number = i.toString()
        let word = ""
        if (i > 1) {
            count = count + ", "
        }
        if (number.length >= 4) {
            word = convertThousands(parseInt(number))
            count = count + word
        }
        if (number.length === 3) {
            count = count + convertHundreds(parseInt(number))
        }
        if (number.length === 2) {
            if (number.charAt(0) === "1") {
                count = count + convertSpecial(parseInt(number.charAt(1)))
                continue //https://www.w3schools.com/jsref/jsref_continue.asp
            } else {
                word = word + convertTens(parseInt(number))
                count = count + word
            }
        }
        if (number.length === 1) {
            count = count + convertOnes(parseInt(number))
        }
        
    }
    let display = document.createElement("p")
    display.innerText = count
    document.body.append(display)
}

displayWords()