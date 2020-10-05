import { shuffle } from 'lodash';
import * as mongoose from 'mongoose';
import { Logger } from '@nestjs/common';

import * as data from './data/cabs.json';
import { CabSchema } from '../cab/cab.schema';
import { DriverSchema } from '../driver/driver.schema';
import { ConfigService } from '../shared/config/config.service';

const LOGGER: Logger = new Logger("CABS SEED");

export async function seedCabs() {
    await mongoose.connect(ConfigService.mongoConnection, ConfigService.mongooseConfig);

    let cabsModel = mongoose.model('Cab', CabSchema);
    let existing = await cabsModel.find().limit(1);

    if (!existing.length) {
        let drivers = await getRandomDriverIds();
        let cabsToPush: any[] = [...data];
        for (let i: number = 0; i < data.length; i++) {
            cabsToPush[i].driverId = drivers[i];
        }
        await cabsModel.insertMany(cabsToPush);
    }
}

async function getRandomDriverIds(): Promise<Array<string>> {
    // randomly assign driverIds
    let driversModel = mongoose.model('Driver', DriverSchema);
    return shuffle((await driversModel.find()).map(driver => driver._id));
}
