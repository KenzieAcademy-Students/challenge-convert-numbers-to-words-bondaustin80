# Kenzie Academy Challenge: Convert Numbers to Words

Follow the instructions provided on `my.kenzie.academy` for this challenge. The `code.js` file is a placeholder. Feel free to rename it or add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan

My current project plan will be to create 3 arrays that contain common word rules. I'll need one for ones digits, one for tens digits, and one that contains numbers betwen 10 and 19 since those all follow their own rules. While this program will be able to count up to 1000000, hundreds and above all follow the same naming conventions, so they don't need their own arrays.

The first step will be to create a few reusable converter functions in order to keep code clean and readable. These converter functions will be able to convert each number into a word based off of specific rules and using arrays, and some of them will even use other converters in order to save time and space.

Finally, I will use a for loop that will push each number into an array. The way it will convert numbers is based off of the length of each number, the program will use if-else statements to determine which converter to use. After the converted numbers are return, they will be added to a single string, and the appended to the document.

## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

There were 3 different approaches I considered for running the code. 

The first approach was to create a single string, and each word would be added to the end of the string. While the initial approach was very easy, it was not efficient for longer code, and would end up crashing the tab when I tried to create too large of a string.

The second approach I used was to append each word to the document as they were added. While this was more efficient, more easily readable, and did not crash the tab, it still used too much memory and would consistently stop at 986895 if I started from 1.

The final approach was to push each number to an array after conversion, and once the array had all 1000000 words, I created another for loop that would splice the words into groups of 10000, and word join and append each array seperately. While this was by far the most complex way of doing it, it ended up being the most efficient memory wise, making it the only way to get all 1000000 words on Chrome without crashing the browser.

_(Put your reflection answer here.)_