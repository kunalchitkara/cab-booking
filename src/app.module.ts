import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CabModule } from './cab/cab.module';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';
import { TrackerModule } from './tracker/tracker.module';

@Module({
  imports: [CabModule, CustomerModule, DriverModule, TrackerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
