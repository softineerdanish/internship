export interface IFetchApiDetail {
  userId: number;
  id: number;
  title: string;
  body: string;
  [index: number]: { label: string; value: string };
  map: Function;

}
