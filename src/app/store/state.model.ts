import { Item } from './item.model';

export interface AppState {
  readonly courses: Array<Item>;
}
