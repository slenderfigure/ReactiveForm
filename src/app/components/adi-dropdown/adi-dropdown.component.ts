import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'adi-dropdown',
  templateUrl: './adi-dropdown.component.html',
  styleUrls: ['./adi-dropdown.component.css']
})
export class AdiDropdownComponent implements OnInit {
  open: boolean = false;
  hide: boolean = false;
  selectedOption: string = '';
  optionIndex = 0;
  @Output() selected = new EventEmitter<string>();
  @Input() options: any[];

  constructor() { }

  ngOnInit(): void {  
  }

  collapseMenu() {
    if (this.open) {
      const list = document.querySelector('.option-list');

      list.classList.add('collapse');
      setTimeout(() => {
        list.classList.remove('collapse');
        this.open = false;
      }, 300);
    }
  }

  onKeyPress(event) {
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
    }
  }

  onClick() {
    if (!this.open) { this.open = true }
    else { this.collapseMenu() }
  }

  clearActiveOption() {
    let options = Array.from(document.querySelectorAll('.option'));
    options.map(option => option.classList.remove('active'));
  }

  onOptionClick(event) {
    let options = Array.from(document.querySelectorAll('.option'));

    this.clearActiveOption();
    event.target.classList.add('active');
    this.optionIndex = options.indexOf(event.target);
    this.selectedOption = event.target.textContent;
    this.selected.emit(this.selectedOption);
    this.collapseMenu();
  }

  keyboardNavigation(arrow: string) {
    const list = document.querySelector('.option-list');
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
    this.selected.emit(this.selectedOption);
    list.children[this.optionIndex].classList.add('active');
  }
}
