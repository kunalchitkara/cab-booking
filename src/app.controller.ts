import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Health Check')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({
    summary: "Fuber API Health Check",
    description: "To check if the service is up and running"
  })
  @Get()
  getHealthCheck(): any {
    return this.appService.getHealthCheck();
  }
}
