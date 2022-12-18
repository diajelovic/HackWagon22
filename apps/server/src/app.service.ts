import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { parse } from 'csv-parse';
import { join } from 'path';
import { createReadStream, read } from 'fs';

const MAX_STATIONS = 10;

export interface StationsSearchParams {
  direction?: 'sender' | 'receiver';
  find?: string;
}

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getStations({ direction = 'sender', find }: StationsSearchParams) {
    const cacheKey = `stations/${direction}${find}`;
    const cache = await this.cacheManager.get(cacheKey);

    if (cache) {
      return Promise.resolve(cache);
    }

    return new Promise((resolve) => {
      const filePath = join(
        process.cwd(),
        `/src/vocabulary/st_code_${
          direction === 'receiver' ? 'snd' : 'rsv'
        }.csv`,
      );
      const fileStream = createReadStream(filePath);
      const parser = parse({
        delimiter: ',',
      });

      const stations = [];

      fileStream.pipe(parser).on('data', ([_, name]) => {
        if (stations.length < MAX_STATIONS) {
          if (find && name.includes(find)) {
            stations.push(name);
          }
        } else {
          fileStream.close();
        }
      });

      fileStream.on('end', () => {
        resolve(stations);
      });
      fileStream.on('close', () => {
        resolve(stations);
      });
    }).then((stations) => {
      this.cacheManager.set(cacheKey, stations, 0);
      return stations;
    });
  }
}
