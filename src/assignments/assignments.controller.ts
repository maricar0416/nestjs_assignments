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

}