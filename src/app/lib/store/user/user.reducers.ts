import { Action, createReducer, on } from '@ngrx/store';
import { removeUser, storeUser } from './user.actions';
import { User } from '../../auth/auth.models';

export interface UserState {
    user: User;
}

const initialUser: UserState = {
    user: {
        id: '',
        username: '',
        email: '',
        full_name: '',
        disabled: true,
        is_superuser: false,
    },
};

const userReducerInternal = createReducer(
    initialUser,
    on(storeUser, (state, { user }) => ({
        ...state,
        user,
    })),
    on(removeUser, (state) => ({
        ...state,
        user: initialUser.user,
    }))
);

export function userReducer(state: UserState | undefined, action: Action) {
    return userReducerInternal(state, action);
}
