import { IMapDataSource } from './map_data_source_interface.ts';

export class MapRepository {
  private dataSource: IMapDataSource;

  constructor(dataSource: IMapDataSource) {
    this.dataSource = dataSource;
  }

  getMapData() {
    return this.dataSource.getMapData();
  }
}
