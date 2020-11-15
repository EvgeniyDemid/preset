import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getServer(): string {
    return "Server Start";
  }
}
