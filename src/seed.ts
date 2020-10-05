import { seedCabs } from "./seed/cabs.seed";
import { seedDrivers } from "./seed/drivers.seed";
import { seedCustomers } from "./seed/customers.seed";

export default async function seedDummyData() {
    await Promise.all([
        seedDrivers(),
        seedCustomers(),
    ])
    await seedCabs();
}