import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-simp-form',
    templateUrl: './simp-form.component.html',
    styleUrls: ['./simp-form.component.scss']
})
export class SimpFormComponent implements OnInit {

    payload = {
        name: 'Lay',
        age: 45,
        gender: 'M',
        stage: 'B',
        country: 'MY',
    };

    stages = [
        {value: 'A', label: 'Perak', country: 'MY'},
        {value: 'B', label: 'Selangor', country: 'MY'},
        {value: 'C', label: 'Pahang', country: 'MY'},
        {value: 'D', label: 'Kedah', country: 'MY'},
        {value: 'J', label: 'Johor', country: 'MY'},
        {value: 'K', label: 'Kelantan', country: 'MY'},
        {value: 'M', label: 'Melaka', country: 'MY'},
        {value: 'N', label: 'Negeri Sembilan', country: 'MY'},
        {value: 'P', label: 'Pulau Pinang', country: 'MY'},
        {value: 'SA', label: 'Sarawak', country: 'MY'},
        {value: 'SB', label: 'Sabah', country: 'MY'},
        {value: 'S', label: '', country: 'SG'},
    ];

    availableStages: Array<any>;

    userFormGroup: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.availableStages = this.stages.filter(stage => stage.country === this.payload.country);

        // Init FormGroup by providing the values
        // this.userFormGroup = new FormGroup({
        //     name: new FormControl(this.payload.name),
        //     age: new FormControl(this.payload.age),
        //     sex: new FormControl(this.payload.gender),
        //     stage: new FormControl(this.payload.stage),
        //     country: new FormControl(this.payload.country),
        // });

        // Value can be set later
        this.userFormGroup = new FormGroup({
            name: new FormControl(),
            age: new FormControl(),
            sex: new FormControl(),
            stage: new FormControl(),
            country: new FormControl(),
        });
        const renameProp = ({gender, ...rest}) => ({...rest, sex: gender}); 
        this.userFormGroup.setValue(renameProp(this.payload));
    }

    onCountryChange() {
        const countryCode = this.userFormGroup.get('country').value;
        this.availableStages = this.stages.filter(stage => stage.country === countryCode);
        const stageControl: AbstractControl = this.userFormGroup.get('stage');
        if (countryCode !== 'SG') {
            stageControl.enable();
        } else {
            stageControl.disable();
            // No stage value after it is disabled
            //this.userFormGroup.patchValue({stage: 'S'});
        }
    }

    onFormSubmit() {
        // No update to payload
        console.log("this.payload", this.payload);
        // All the value are stored in formGroup
        console.log("form", this.userFormGroup.value);
        // Get particular value
        console.log('Name:' + this.userFormGroup.get('name').value);
        // Recognized by formControlName
        console.log('Gender:' + this.userFormGroup.get('sex').value);
    }

}
