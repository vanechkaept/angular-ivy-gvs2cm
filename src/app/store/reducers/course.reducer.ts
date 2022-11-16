import { CourseAction, CourseActionType } from '../course.action';
import { Item } from '../item.model';

const initialState: Array<Item> = [
  {
    id: '1',
    department: 'Computer Engineering',
    name: 'C++ Programming',
  },
];
export function CourseReducer(
  state: Array<Item> = initialState,
  action: CourseAction
) {
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
