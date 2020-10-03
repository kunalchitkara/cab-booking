import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): any {
    return { message: "Health Check", status: true };
  }
}
