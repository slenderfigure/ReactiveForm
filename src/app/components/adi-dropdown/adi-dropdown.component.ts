import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'adi-dropdown',
  templateUrl: './adi-dropdown.component.html',
  styleUrls: ['./adi-dropdown.component.css']
})
export class AdiDropdownComponent implements OnInit {
  @ViewChildren('options') _options: QueryList<ElementRef>
  @ViewChild('OptionList') OptionList: ElementRef;
  @Output() selected = new EventEmitter<string>();
  @Input() options: any[];
  open: boolean = false;
  hide: boolean = false;
  selectedOption: string = '';
  optionIndex: number = 0;
  

  constructor() { }

  ngOnInit(): void {  
  }

  collapseMenu() {
    if (this.open) {
      const list = <HTMLElement>this.OptionList.nativeElement;

      list.classList.add('collapse');
      setTimeout(() => {
        list.classList.remove('collapse');
        this.open = false;
      }, 300);
    }
  }

  onKeyPress(event: KeyboardEvent) {
    event.preventDefault();

    switch(event.key) {
      case 'Enter':
        this.onClick();
        break;

      case 'Escape':
      case 'Tab':
        this.collapseMenu();
        break;      

      case 'ArrowDown':
        this.keyboardNavigation('down');
        break;

      case 'ArrowUp':
        this.keyboardNavigation('up');
        break;
      
      default:
        return;
    }
  }

  onClick() {
    if (!this.open) { this.open = true }
    else { this.collapseMenu() }
  }

  clearActiveOption() {
    const options = this._options.toArray()
      .map(option => option.nativeElement);
    options.map(option => option.classList.remove('active'));
  }

  onOptionClick(option: HTMLElement) {
    const options = this._options.toArray()
      .map(option => option.nativeElement);

    this.clearActiveOption();
    option.classList.add('active');
    this.optionIndex = options.indexOf(option);
    this.selectedOption = option.textContent;
    this.selected.emit(this.selectedOption);
    this.collapseMenu();
  }

  keyboardNavigation(arrow: string) {
    const list = <HTMLElement>this.OptionList.nativeElement;
    const length = list.childElementCount - 1;

    if(arrow === 'down') {
      this.optionIndex = this.optionIndex == length ?
        0 : this.optionIndex += 1;   
    }
    if(arrow === 'up') {
      this.optionIndex = this.optionIndex < 1 ? 
        length : this.optionIndex -= 1;
    }

    this.clearActiveOption();
    this.selectedOption = list.children[this.optionIndex].
      textContent;
    list.children[this.optionIndex].classList.add('active');
    list.children[this.optionIndex].scrollIntoView({ behavior: 'smooth' });
    this.selected.emit(this.selectedOption);
  }
}
