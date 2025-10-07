export default function QueryProcessor(query: string): string {
  // Handle Shakespeare query
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  // Handle name query
  if (query.toLowerCase().includes("name")) {
    return "wtkane";
  }

  // Handle Andrew ID query
  if (query.toLowerCase().includes("andrew id")) {
    return "Wtkane";
  }

  // Handle largest number queries
  const largestMatch = query.match(/which of the following numbers is the largest: (.*?)\?/i);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(n => parseInt(n.trim()));
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  // Handle addition queries
  const additionMatch = query.match(/what is (\d+) plus (\d+)\?/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1]);
    const num2 = parseInt(additionMatch[2]);
    const sum = num1 + num2;
    return sum.toString();
  }

  // Handle subtraction queries
  const subtractionMatch = query.match(/what is (\d+) minus (\d+)\?/i);
  if (subtractionMatch) {
    const num1 = parseInt(subtractionMatch[1]);
    const num2 = parseInt(subtractionMatch[2]);
    const difference = num1 - num2;
    return difference.toString();
  }

  // Handle multiplication queries
  const multiplicationMatch = query.match(/what is (\d+) multiplied by (\d+)\?/i);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1]);
    const num2 = parseInt(multiplicationMatch[2]);
    const product = num1 * num2;
    return product.toString();
  }

  // Handle division queries
  const divisionMatch = query.match(/what is (\d+) divided by (\d+)\?/i);
  if (divisionMatch) {
    const num1 = parseInt(divisionMatch[1]);
    const num2 = parseInt(divisionMatch[2]);
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    const quotient = num1 / num2;
    return quotient.toString();
  }

  // Handle power/exponentiation queries
  const powerMatch = query.match(/what is (\d+) to the power of (\d+)\?/i);
  if (powerMatch) {
    const base = parseInt(powerMatch[1]);
    const exponent = parseInt(powerMatch[2]);
    const result = Math.pow(base, exponent);
    return result.toString();
  }

  // Handle square root queries
  const sqrtMatch = query.match(/what is the square root of (\d+)\?/i);
  if (sqrtMatch) {
    const num = parseInt(sqrtMatch[1]);
    if (num < 0) {
      return "Cannot calculate square root of negative number";
    }
    const result = Math.sqrt(num);
    return result.toString();
  }

  // Handle prime number queries
  const primeMatch = query.match(/which of the following numbers are primes: ([\d\s,]+)\?/i);
  if (primeMatch) {
    const numbers = primeMatch[1].split(',').map(n => parseInt(n.trim()));
    const primes = numbers.filter(isPrime);
    return primes.join(', ');
  }

  return "";
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
