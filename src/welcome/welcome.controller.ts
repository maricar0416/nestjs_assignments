import { Controller, Get } from '@nestjs/common';

@Controller('welcome')
export class WelcomeController {
  @Get()
  getWelcomeMessage(): string {
    return 'Welcome Kevin';
  }
}