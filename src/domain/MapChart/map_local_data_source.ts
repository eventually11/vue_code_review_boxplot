import { mapData } from './map_data.ts';
import { IMapDataSource } from './map_data_source_interface.ts';

export class MapLocalDataSource implements IMapDataSource {
  getMapData() {
    return mapData;
  }
}
