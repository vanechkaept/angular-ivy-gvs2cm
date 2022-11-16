import { Action } from '@ngrx/store';
import { Item } from './item.model';
export enum CourseActionType {
  ADD_ITEM = '[COURSE] Add Course',
}
export class AddItemAction implements Action {
  readonly type = CourseActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: Item) {}
}
export type CourseAction = AddItemAction;
