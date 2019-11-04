import { takeLatest } from 'redux-saga/effects';
import { TodosActionsTypes, TodoAction, sagas} from './todos';

export default function* rootSagas() {
  yield takeLatest(
    TodosActionsTypes.GET_TODOS,
    (action: TodoAction) => sagas(action)
  );
}