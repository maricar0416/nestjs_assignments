import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  
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