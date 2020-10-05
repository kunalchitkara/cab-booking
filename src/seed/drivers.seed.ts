import * as mongoose from 'mongoose';
import { Logger } from '@nestjs/common';

import * as data from './data/users.json';
import { DriverSchema } from '../driver/driver.schema';
import { ConfigService } from '../shared/config/config.service';

const LOGGER: Logger = new Logger("DRIVERS SEED");

export async function seedDrivers() {
    await mongoose.connect(ConfigService.mongoConnection, ConfigService.mongooseConfig);

    let driversModel = mongoose.model('Driver', DriverSchema);
    let existing = await driversModel.find().limit(1);
    if (!existing.length) {
        await driversModel.insertMany(data);
    }
}
