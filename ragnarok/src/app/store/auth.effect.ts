import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {addUser, addUserSuccessfull} from "./auth.actions";
import {map, switchMap} from 'rxjs/operators';
import {LoginService} from "../service/loginService";
import {auth} from "./auth.reducer";


@Injectable()
export class LoginEffects{

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addUser),
            switchMap(() => this.loginService.getAllArticles().pipe(
                map(photos => addUserSuccessfull({auth}))
            ))
        )
    )
    constructor(
        private actions$: Actions, // this is an RxJS stream of all actions
        private loginService : LoginService
    ) {}

}
