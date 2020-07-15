import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-grid-a',
    templateUrl: './grid-a.component.html',
    styleUrls: ['./grid-a.component.css']
})
export class GridAComponent implements OnInit {

    isShow = false;
    payload: any = {};
    parametersForm: FormGroup;

    constructor(private readonly fb: FormBuilder) { }

    ngOnInit(): void {
        this.reloadPayload();
        this.parametersForm = this.fb.group({
            parameters: this.fb.array([]),
            description: ['', [Validators.required]],
        });
        const parameters = this.formArray;
        this.rows.forEach((row: []) => {
            const group = {};
            row.forEach((cell, colIndex) => {
                group[colIndex] = [cell, [Validators.required]];
            });
            parameters.push(this.fb.group(group));
        });
    }

    getColumnType(index: number) {
        const col: any = this.columns[index];
        if (col.type.textField) {
            return col.type.textField.type;
        }

        if (col.type.dropDown) {
            return 'dropDown';
        }
    }

    getControls(group: FormGroup | FormArray) {
        if (group instanceof FormArray) {
            return group.controls;
        }
        return Object.keys(group.controls);
    }

    getDropdownOptions(columnIndex: number) {
        const column = this.columns[columnIndex];
        if (!column['type']['dropDown']) {
            throw new Error('It is not a dropdown')
        }
        return column['type']['dropDown']['entries'];
    }

    get formArray(): FormArray {
        return this.parametersForm.get('parameters') as FormArray;
    }

    get columns(): [] {
        return this.payload ? this.payload.container.content.parametersTable.config.table.columns : [];
    }

    get rows(): [] {
        return this.payload ? this.payload.container.content.parametersTable.config.values : [];
    }

    reloadPayload() {
        this.payload = {
            container: {
                componentId: 'main-container-parameters',
                content: {
                    parametersTable: {
                        componentId: 'parameters-table',
                        config: {
                            values: [
                                ['Row A', '1', '1998-05-31'],
                                ['Row B', '2', '2020-06-30'],
                                ['Row C', '3', '2020-06-15'],
                            ],
                            table: {
                                columns: [
                                    {
                                        label: 'Name',
                                        type: {
                                            textField: {
                                                type: 'String',
                                                length: 20,
                                            }
                                        }
                                    },
                                    {
                                        label: 'Type',
                                        type: {
                                            dropDown: {
                                                ddGroupName: 'Row-Type',
                                                entries: [
                                                    {
                                                        internalCode: '1',
                                                        label: 'A'
                                                    },
                                                    {
                                                        internalCode: '2',
                                                        label: 'B'
                                                    },
                                                    {
                                                        internalCode: '3',
                                                        label: 'C'
                                                    },
                                                    {
                                                        internalCode: '4',
                                                        label: 'D'
                                                    },
                                                ]
                                            }
                                        }

                                    },
                                    {
                                        label: 'Date',
                                        type: {
                                            textField: {
                                                type: 'date',
                                                length: 20,
                                            }
                                        }
                                    },
                                ]
                            }
                        }
                    }
                },
            }
        };
        this.isShow = true;

    }

}
