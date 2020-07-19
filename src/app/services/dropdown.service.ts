import { Injectable } from '@angular/core';

import { DropdownOption } from '../interfaces/dropdown-option';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DropdownService {

    private countries: Array<DropdownOption> = [
        {internalCode: 'MY', label: 'Malaysia'},
        {internalCode: 'SG', label: 'Singapore'},
    ];

    constructor() { }

    getCountries(): Observable<Array<DropdownOption>> {
        return of(this.countries);
    }
}
