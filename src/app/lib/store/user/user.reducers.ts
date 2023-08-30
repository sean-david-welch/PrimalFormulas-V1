import { createReducer, on } from '@ngrx/store';
import { storeUser } from './user.actions';
import { User } from '../../auth/auth.models';

export interface UserState {
    user: User;
}

const initialState: UserState = {
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
    initialState,
    on(storeUser, (state, { user }) => ({
        ...state,
        user,
    }))
);

export function userReducer(state: UserState | undefined, action: any) {
    return userReducerInternal(state, action);
}
