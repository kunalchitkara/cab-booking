import { Injectable, Logger } from '@nestjs/common';

import * as fs from 'fs';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
    private readonly envConfig: Record<string, any>;

    /**
     * to initialize the config with appropriate ENV path
     * @param filePath refers to the path of the ENV file
     */
    constructor(filePath?: string) {
        if (!filePath) {
            this.envConfig = process.env;
        }
        else {
            try {
                this.envConfig = dotenv.parse(fs.readFileSync(filePath));
            }
            catch (error) {
                this.envConfig = process.env;
            }
        }
    }

    /**
     * to get the mongo connection set in env
     */
    static get mongoConnection(): string {
        let connection: string = process.env['DATABASE_CONNECTION'] || 'mongodb://192.168.99.100:27017/fuber';
        Logger.log("Mongo Connection: " + connection, ConfigService.name);
        return connection;
    }

    /**
     * to get any value from ENV correspnding to an input key
     */
    private get = (key: string): string => this.envConfig[key];

    /**
     * get environment of the running application
     */
    get env(): string {
        return this.get('APP_ENV') || 'dev';
    }

    /**
     * get port of the hosting server
     */
    get port(): number {
        return Number(this.get('APP_PORT') || '4600');
    }

}
