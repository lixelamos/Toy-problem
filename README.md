# Toy-problem
The program uses the prompt function to get the user's input for their basic salary and the value of their benefits. The parseFloat function is used to convert the input strings into floating-point numbers.
The program then calculates the gross salary by adding the basic salary and benefits together.
Next, the program calculates the deductions by applying the appropriate rates and fixed amounts. The PAYE tax is calculated as a percentage of the gross salary, with the rate stored in the taxRate variable. The NHIF deduction is a fixed amount of KES 500. The NSSF deduction is a percentage of the gross salary, capped at KES 2000.
Finally, the program calculates the net salary by subtracting the deductions from the gross salary.
The program then displays the results using template literals with 2 decimal places for the currency amounts, and the toFixed method to format the output.