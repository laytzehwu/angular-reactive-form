import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DropdownOption } from '../interfaces/dropdown-option';

@Injectable({
    providedIn: 'root'
})
export class ParametersService {
    private types: Array<DropdownOption> = [
        { internalCode: '1', label: 'A' },
        { internalCode: '2', label: 'B' },
        { internalCode: '3', label: 'C' },
        { internalCode: '4', label: 'D' },
    ];

    private stages: Array<DropdownOption> = [
        { internalCode: 'A', label: 'Perak', parentCode: 'MY'},
        { internalCode: 'B', label: 'Selangor', parentCode: 'MY'},
        { internalCode: 'C', label: 'Pahang', parentCode: 'MY'},
        { internalCode: 'D', label: 'Kedah', parentCode: 'MY'},
        { internalCode: 'J', label: 'Johor', parentCode: 'MY'},
        { internalCode: 'K', label: 'Kelantan', parentCode: 'MY'},
        { internalCode: 'M', label: 'Melaka', parentCode: 'MY'},
        { internalCode: 'N', label: 'Negeri Sembilan', parentCode: 'MY'},
        { internalCode: 'P', label: 'Pulau Pinang', parentCode: 'MY'},
        { internalCode: 'SA', label: 'Sarawak', parentCode: 'MY'},
        { internalCode: 'SB', label: 'Sabah', parentCode: 'MY'},
        { internalCode: 'T',  label: 'Terenganuh', parentCode: 'MY'},
    ];

    private samplePayload = {
        container: {
            componentId: 'main-container-parameters',
            content: {
                parametersTable: {
                    componentId: 'parameters-table',
                    config: {
                        values: [
                            ['Row A', '1', '1998-05-31', 'T'],
                            ['Row B', '2', '2020-06-30', ''],
                            ['Row C', '3', '2020-06-15', ''],
                        ],
                        table: {
                            columns: [
                                {
                                    label: 'Name',
                                    type: { textField: { type: 'String', length: 20, }, }
                                },
                                {
                                    label: 'Type',
                                    type: { dropDown: { ddGroupName: 'Row-Type', entries: this.types, }, }
                                },
                                {
                                    label: 'Date',
                                    type: { textField: { type: 'date', length: 20, }, }
                                },
                                {
                                    label: 'Deliver Stage',
                                    type: { dropDown: { ddGroupName: 'Target', entries: this.stages, }, }
                                }
                            ]
                        }
                    }
                }
            },
        }
    };

    constructor() { }

    getSamplePayload():Observable<any> {
        return of(this.samplePayload);
    }
}
