1. 原因: reducer 是一个纯函数, 接收旧的state和action返回新的state,不能有副作用,
        所以在进行一些异步任务的时候就需要一些中间件的支持
        // 创建saga
        import { call, put, takeEvery } from 'redux-saga/effects'
        import { fetchUserApi } from '../api/user';
        import { USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED, USER_FETCH_FAILED } from '../actions/User';
        
        function* fetchUser({ payload }) {
         try {
          const user = yield call(fetchUserApi, payload.userId);
          yield put({ type: USER_FETCH_SUCCEEDED, user });
         } catch (e) {
          yield put({ type: USER_FETCH_FAILED, message: e.message });
         }
        }
         
        const userSaga = function* () {
         yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
        }
         
        export default userSaga;
        // redux-saga注入store
        import createSagaMiddleware from 'redux-saga';
        import Sagas from '../sagas/index';
        
        const sagaMiddleware = createSagaMiddleware()
        const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
        )
        sagaMiddleware.run(Sagas)