import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../store/user/user.selectors';
import { take } from 'rxjs/operators';

@Directive({
    selector: '[isSuperUser]',
})
export class SuperUserDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private store: Store
    ) {}

    ngOnInit() {
        this.store.pipe(select(selectUser), take(1)).subscribe((user) => {
            if (user?.is_superuser) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        });
    }
}
