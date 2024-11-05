import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  
  // Welcome
  @Get('welcome/:name') // Route: /assignments/welcome/:name
  welcome(@Param('name') name: string): string {
    return `Welcome back, ${name}`;
  }

  // Square Calculation
  @Get('square/:number') // Route: /assignments/square/:number
  square(@Param('number') number: string): string {
    const num = parseInt(number);
    const square = num * num;
    return `The square of ${num} is ${square}`;
  }

  // Age Calculation
  @Get('age/:year') // Route: /assignments/age/:year
  calculateAge(@Param('year') year: string): string {
    const birthYear = parseInt(year);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return `Your age is ${age}`;
  }
}
