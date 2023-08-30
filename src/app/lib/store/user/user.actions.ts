import { createAction, props } from '@ngrx/store';
import { User } from '../../auth/auth.models';

export const storeUser = createAction(
    '[User] Login User',
    props<{ user: User }>()
);

export const removeUser = createAction('[User] Logout User');
