import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  // Route: /assignments/fibonacci/:n
  @Get('fibonacci/:number')
  fibonacci(@Param('number') number: string): { sequence: number[] } {
    const num = parseInt(number);

    if (num <= 0) {
      return { sequence: [] }; // Return an empty array for non-positive integers
    }

    const sequence = [0, 1];
    
    // Generate Fibonacci sequence
    for (let i = 2; i < num; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    // Handle cases for n = 1 and n = 2
    if (num === 1) {
      return { sequence: [0] }; // Only the first Fibonacci number
    } else if (num === 2) {
      return { sequence: sequence.slice(0, 2) }; // First two Fibonacci numbers
    }

    return { sequence: sequence.slice(0, num) }; // Return the sequence up to n terms
  }

    // Prime Number Checker
    @Get('prime/:number')
    prime(@Param('number') number: string): { isPrime: boolean } {
      const num = parseInt(number);
      if (num <= 1) return { isPrime: false };
      if (num <= 3) return { isPrime: true }; // 2 and 3 are prime numbers
  
      // Eliminate even numbers and multiples of 3
      if (num % 2 === 0 || num % 3 === 0) return { isPrime: false };
  
      // Check for factors up to the square root of the number
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
          return { isPrime: false };
        }
      }
  
      return { isPrime: true };
    }

     // Factorial Calculator
  @Get('factorial/:number')
  factorial(@Param('number') number: string): { factorial: number } {
    const num = parseInt(number);

    if (num < 0) {
      return { factorial: -1 }; // Return -1 for negative numbers, as factorials are undefined for them
    }

    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }

    return { factorial: result };
  }
}