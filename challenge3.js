// Define tax brackets and rates
const taxBrackets = [
    { max: 12298, rate: 0 },
    { max: 10702, rate: 0.1 },
    { max: 10702, rate: 0.15 },
    { max: 10702, rate: 0.2 },
    { max: 10702, rate: 0.25 },
    { max: Infinity, rate: 0.3 },
  ];
  
  // Define NHIF and NSSF rates
  const nhifRate = 0.015;
  const nssfRate = 0.06;
  
  // Get input from user
  const basicSalary = parseFloat(prompt("Enter basic salary:"));
  const benefits = parseFloat(prompt("Enter benefits:"));
  
  // Calculate gross salary
  const grossSalary = basicSalary + benefits;
  
  // Calculate taxable income
  const taxableIncome = grossSalary - 24000; // First KSh 24,000 is tax-free
  let taxAmount = 0;
  for (const bracket of taxBrackets) {
    if (taxableIncome <= bracket.max) {
      taxAmount = taxableIncome * bracket.rate;
      break;
    } else {
      taxAmount += (bracket.max - (bracket === taxBrackets[0] ? 0 : taxBrackets[taxBrackets.indexOf(bracket) - 1].max)) * bracket.rate;
    }
  }
  
  // Calculate NHIF and NSSF deductions
  const nhifDeduction = Math.min(grossSalary * nhifRate, 5000); // Maximum NHIF contribution is KSh 5,000 per month
  const nssfDeduction = Math.min(grossSalary * nssfRate, 200); // Maximum NSSF contribution is KSh 200 per month
  
  // Calculate net salary
  const netSalary = grossSalary - taxAmount - nhifDeduction - nssfDeduction;
  
  // Print results
  console.log(`Gross salary: KSh ${grossSalary.toFixed(2)}`);
  console.log(`PAYE (tax) deduction: KSh ${taxAmount.toFixed(2)}`);
  console.log(`NHIF deduction: KSh ${nhifDeduction.toFixed(2)}`);
  console.log(`NSSF deduction: KSh ${nssfDeduction.toFixed(2)}`);
  console.log(`Net salary: KSh ${netSalary.toFixed(2)}`);
  