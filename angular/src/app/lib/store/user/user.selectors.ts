import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducers';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
    selectUserState,
    (state: UserState) => state.user
);
