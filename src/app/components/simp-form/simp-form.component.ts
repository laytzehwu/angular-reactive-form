import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    };

    userFormGroup: FormGroup;

    constructor() { }

    ngOnInit(): void {
        // Init FormGroup by providing the values
        // this.userFormGroup = new FormGroup({
        //     name: new FormControl(this.payload.name),
        //     age: new FormControl(this.payload.age),
        //     sex: new FormControl(this.payload.gender),
        //     stage: new FormControl(this.payload.stage),
        // });

        // Value can be set later
        this.userFormGroup = new FormGroup({
            name: new FormControl(),
            age: new FormControl(),
            sex: new FormControl(),
            stage: new FormControl(),
        });
        const renameProp = ({gender, ...rest}) => ({...rest, sex: gender}); 
        this.userFormGroup.setValue(renameProp(this.payload));
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
