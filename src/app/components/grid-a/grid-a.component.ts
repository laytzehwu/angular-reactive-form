import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ParametersService } from '../../services/parameters.service';

@Component({
    selector: 'app-grid-a',
    templateUrl: './grid-a.component.html',
    styleUrls: ['./grid-a.component.css']
})
export class GridAComponent implements OnInit {

    isShow = false;
    payload;
    parametersForm: FormGroup;

    constructor(
        private readonly fb: FormBuilder,
        private readonly parametersService: ParametersService) { }

    ngOnInit(): void {
        this.reloadPayload();
        this.parametersForm = this.fb.group({
            parameters: this.fb.array([]),
        });
        // formArray mapps to this.parametersForm.get('parameters')
        const parameters = this.formArray;
        // Rows mapp to this.payload.container.content.parametersTable.config.values
        this.rows.forEach((row: []) => {
            const group = {};
            row.forEach((cell, colIndex) => {
                group[colIndex] = [cell, [Validators.required]];
            });
            parameters.push(this.fb.group(group));
        });
    }

    getColumnType(index: number): string {
        const col: any = this.columns[index];
        if (col.type.textField) {
            return col.type.textField.type;
        }

        if (col.type.dropDown) {
            return 'dropDown';
        }
    }

    getRowControlsIndex(group: FormGroup): Array<string> {
        return Object.keys(group.controls);
    }

    getDropdownOptions(columnIndex: number) {
        const column = this.columns[columnIndex];
        if (!column['type']['dropDown']) {
            throw new Error('It is not a dropdown')
        }
        return column['type']['dropDown']['entries'];
    }

    onFormSubmit() {
        console.log(this.parametersForm.value);
        console.log('Invalid', this.parametersForm.invalid);
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
        this.parametersService.getSamplePayload().subscribe(data => {
            console.log('Received data', data);
            this.payload = data;
            this.isShow = true;
        });
    }
}
