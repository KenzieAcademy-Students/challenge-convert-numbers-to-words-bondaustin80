// Your code here

//Arrays for converters to reference

let ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

let tens = ["", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"]

let special = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

//Reusable converters that the functions will use to find numbers
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
    } else if (parseInt(number.charAt(2)) > 0) {
        word = word + "-" + convertOnes(parseInt(number.charAt(2)))
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

function convertSpecial(x){
    let word = ""
    word = special[x]
    return word
}


//Function to get array of words
function countWords() {
    let count = []
    for (let i = 1; i <= 1000000; i++) {
        let number = i.toString()
        let word = ""
        if (number.length === 7) {
            count.push("one-million")
        } else if (number.length >= 4 && number.length <= 6) {
            word = convertThousands(parseInt(number))
            count.push(word)
        } else if (number.length === 3) {
            word = convertHundreds(parseInt(number))
            count.push(word)
        } else if (number.length === 2) {
            if (number.charAt(0) === "1") {
                word = convertSpecial(parseInt(number.charAt(1)))
                count.push(word)
                continue //https://www.w3schools.com/jsref/jsref_continue.asp
            } else {
                word = word + convertTens(parseInt(number))
                count.push(word)
            }
        } else if (number.length === 1) {
            word = convertOnes(parseInt(number))
            count.push(word)
        }
    }
    let size = count.length/10000
    for (let i = 0; i < size; i++) {
        let temp = count.slice(0, 10000)
        count.splice(0, 10000)
        setTimeout(displayWords, 3000, temp)
    }
}

//Function to display all numbers at once
function displayWords(array) {
        let display = document.createElement("p")
        display.innerText = array.join(", ")
        document.body.append(display)
}

//Function will use user input to find matching word
function convertInput() {
    let number = document.getElementById("inputNum").value
    console.log(number)
    let result = document.getElementById("result")
    if (number < 1 || number > 1000000 || isNaN(number)) {
        result.innerText = "Please enter valid number"
    } else {
        number = number.toString()
        let word = ""
        if (number.length === 7) {
            result.innerText = "Result: one-million"
        } else if (number.length >= 4 && number.length <= 6) {
            word = convertThousands(parseInt(number))
            result.innerText = "Result: " + word
        } else if (number.length === 3) {
            word = convertHundreds(parseInt(number))
            result.innerText = "Result: " + word
        } else if (number.length === 2) {
            if (number.charAt(0) === "1") {
                word = convertSpecial(parseInt(number.charAt(1)))
                result.innerText = "Result: " + word
            } else {
                word = word + convertTens(parseInt(number))
                result.innerText = "Result: " + word
            }
        } else if (number.length === 1) {
            word = convertOnes(parseInt(number))
            result.innerText = "Result: " + word
        }
    }
}

let inputNum = document.createElement("input")
let title = document.createElement("label")
let submit = document.createElement("button")
let result = document.createElement("p")
title.innerText = "Enter number between 1 and 1000000:"
inputNum.id = "inputNum"
result.id = "result"
submit.innerText="Submit"
submit.addEventListener("click", convertInput)
document.body.append(title)
document.body.append(inputNum)
document.body.append(submit)
document.body.append(result)

countWords()