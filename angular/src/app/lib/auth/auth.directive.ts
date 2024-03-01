import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { selectUser } from '../store/user/user.selectors';

@Directive({
    selector: '[isSuperUser]',
})
export class SuperUserDirective {
    private userSubscription?: Subscription;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private store: Store
    ) {}

    ngOnInit() {
        this.userSubscription = this.store
            .pipe(select(selectUser))
            .subscribe((user) => {
                if (user?.is_superuser) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }
            });
    }

    ngOnDestroy() {
        this.userSubscription?.unsubscribe();
    }
}
