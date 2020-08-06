import 'material-design-lite/material';

import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  styleUrls: ['./todo-list.component.scss'],
  templateUrl: './todo-list.component.html',
  providers: [TodoListService],
})
export class TodoListComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.todo') private readonly todo = true;

  private items;
  private createdItem = null;
  private todoItemsSubscription;

  @ViewChild('todoInput') private set todoInput(element: ElementRef) {
    if (element) {
      element.nativeElement.focus();
    }
  }
  @ViewChildren('listItem') private todoItems: QueryList<ElementRef>;

  constructor(todoListService: TodoListService) {
    this.items = todoListService.getItems();
  }

  public ngAfterViewInit(): void {
    this.todoItemsSubscription = this.todoItems.changes.subscribe((todoItems) => {
      if (todoItems.last) {
        componentHandler.upgradeElement(todoItems.last.nativeElement.querySelector('[checkboxitem]'));
        const textField = todoItems.last.nativeElement.querySelector('.mdl-textfield');
        if (textField) {
          componentHandler.upgradeElement(textField);
        }
      }
    });
  }

  public ngOnDestroy(): void {
    this.todoItemsSubscription.unsubscribe();
  }

  private deleteItem(item): void {
    this.items = this.items.filter(i => i !== item);
  }

  private createItem(): void {
    this.createdItem = {
      title: '',
      id: Date.now(),
      completed: false,
    };
  }

  private addItem(): void {
    if (this.createdItem.title) {
      this.items.push({ ...this.createdItem });
    }
    this.createdItem = null;
  }

  private deleteCompletedItems(): void {
    this.items = this.items.filter((item: any) => !item.completed);
  }
}
