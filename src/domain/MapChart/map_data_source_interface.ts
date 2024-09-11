export interface IMapDataSource {
  getMapData(): Array<{ lat: number; lng: number; intensity: number }>;
}