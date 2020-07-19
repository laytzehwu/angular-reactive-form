import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ParametersService } from 'src/app/services/parameters.service';

@Component({
    selector: 'app-grid-b',
    templateUrl: './grid-b.component.html',
    styleUrls: ['./grid-b.component.css']
})
export class GridBComponent implements OnInit {

    isShow = false;
    payload;
    parametersForm: FormGroup; // Complete form
    rowFormGroups: FormArray; // Keeps rows controls
    columns: Array<any>;
    columnIndex: Array<string>; // Just a simple string array. It should be '0','1','2', etc

    constructor(
        private readonly fb: FormBuilder,
        private readonly parametersService: ParametersService) { }

    ngOnInit(): void {
        this.initForm();
        this.reloadPayload();
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

    getDropdownOptions(columnIndex: number) {
        const column = this.columns[columnIndex];
        if (!column['type']['dropDown']) {
            throw new Error('It is not a dropdown')
        }
        return column['type']['dropDown']['entries'];
    }

    private loadForm() {
        this.columns = this.payload.container.content.parametersTable.config.table.columns;
        this.columnIndex = this.columns.map((column, index) => index) // Just want index
            .map(index => index + ''); // Make it string
        const rows = this.payload.container.content.parametersTable.config.values;
        rows.forEach(row => {
            const rowFormGroupInput = {};
            row.forEach((cellText, colIndex) => {
                rowFormGroupInput[colIndex] = [cellText, Validators.required];
            });
            this.rowFormGroups.push(this.fb.group(rowFormGroupInput));
        });
    }

    private initForm() {
        this.rowFormGroups = this.fb.array([]);
        this.parametersForm = this.fb.group({
            parameters: this.rowFormGroups,
        });
    }

    private reloadPayload() {
        this.parametersService.getSamplePayload().subscribe(data => {
            console.log('Received data', data);
            this.payload = data;
            this.isShow = true;
            this.loadForm();
        });
    }
}
