import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-flex',
    templateUrl: './flex.component.html',
    styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

    @ViewChild('default')
    default: ElementRef | undefined;

    @ViewChild('display')
    display: ElementRef | undefined;

    @ViewChild('height')
    height: ElementRef | undefined;

    containerHeight: number = 64;

    constructor() { }

    ngOnInit(): void {
    }

    onChangeDisplay(newVal: string) {
        const div: HTMLElement = this.default.nativeElement;
        div.style.display = newVal;
    }

    makeItFlex() {
        const diplaySelector: HTMLInputElement = this.display.nativeElement;
        if (diplaySelector.value != 'flex') {
            diplaySelector.value = 'flex';
            this.onChangeDisplay(diplaySelector.value);
        }
    }

    onChangeJustifyContent(newVal: string) {
        const div: HTMLElement = this.default.nativeElement;
        div.style.justifyContent = newVal;
        if (newVal) {
            this.makeItFlex();
        }
    }

    onChangeFlexDirection(newVal: string) {
        const div: HTMLElement = this.default.nativeElement;
        div.style.flexDirection = newVal;
        if (newVal) {
            this.makeItFlex();
        }
    }

    onLimitHeight(checked: boolean) {
        const div: HTMLElement = this.default.nativeElement;
        const heightInput: HTMLInputElement = this.height.nativeElement;
        if (checked) {
            div.style.height = `${heightInput.value}rem`;
            heightInput.disabled = false;
        } else {
            heightInput.disabled = true;
            div.style.height = '';
        }
    }

    onChangeHeight(newVal: string) {
        const div: HTMLElement = this.default.nativeElement;
        this.containerHeight = parseInt(newVal);
        div.style.height = `${this.containerHeight}rem`;
    }

    onChangeFlexWrap(newVal: string) {
        const div: HTMLElement = this.default.nativeElement;
        div.style.flexWrap = newVal;
        if (newVal) {
            this.makeItFlex();
        }
    }

    onChangeAlignItem(newVal: string) {
        const div: HTMLElement = this.default.nativeElement;
        div.style.alignItems = newVal;
        if (newVal) {
            this.makeItFlex();
        }
    }

}
