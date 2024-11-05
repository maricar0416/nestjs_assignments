import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WelcomeController } from './welcome/welcome.controller';
import { AssignmentsController } from './assignments/assignments.controller';

@Module({
  imports: [],
  controllers: [AppController, WelcomeController, AssignmentsController],
  providers: [AppService],
})
export class AppModule {}
