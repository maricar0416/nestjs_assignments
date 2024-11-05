import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  
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
}