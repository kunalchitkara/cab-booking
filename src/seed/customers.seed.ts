import * as mongoose from 'mongoose';
import { Logger } from '@nestjs/common';

import * as data from './data/users.json';
import { CustomerSchema } from '../customer/customer.schema';
import { ConfigService } from '../shared/config/config.service';

const LOGGER: Logger = new Logger("CUSTOMERS SEED");

export async function seedCustomers() {
    await mongoose.connect(ConfigService.mongoConnection, ConfigService.mongooseConfig);

    let customersModel = mongoose.model('Customer', CustomerSchema);
    let existing = await customersModel.find().limit(1);
    if (!existing.length) {
        for (let customer of data) {
            customer.mobile = customer.mobile.replace('99999', '88888');
        }
        await customersModel.insertMany(data);
    }
}
