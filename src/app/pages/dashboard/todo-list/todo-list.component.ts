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
  @HostBinding('class.todo') public readonly todo = true;

  public items;
  public createdItem = null;
  public todoItemsSubscription;

  @ViewChild('todoInput',  { static: false }) public set todoInput(element: ElementRef) {
    if (element) {
      element.nativeElement.focus();
    }
  }
  @ViewChildren('listItem') public todoItems: QueryList<ElementRef>;

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

  public deleteItem(item): void {
    this.items = this.items.filter(i => i !== item);
  }

  public createItem(): void {
    this.createdItem = {
      title: '',
      id: Date.now(),
      completed: false,
    };
  }

  public addItem(): void {
    if (this.createdItem.title) {
      this.items.push({ ...this.createdItem });
    }
    this.createdItem = null;
  }

  public deleteCompletedItems(): void {
    this.items = this.items.filter((item: any) => !item.completed);
  }
}
