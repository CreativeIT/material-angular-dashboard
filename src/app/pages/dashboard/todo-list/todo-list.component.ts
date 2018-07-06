// FIXME: loaded from service selected items are not visually selected

import 'material-design-lite/material';

import {
  Component,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

import { HostClassBinding } from 'helpers';

import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  styleUrls: ['./todo-list.component.scss'],
  templateUrl: './todo-list.component.html',
  providers: [TodoListService],
})
@HostClassBinding('todo')
export class TodoListComponent implements AfterViewInit, OnDestroy {
  public items;
  public createdItem = null;

  @ViewChild('todoInput')
  set todoInput(element: ElementRef) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  @ViewChildren('listItem')
  private todoItems: QueryList<ElementRef>;
  private todoItemsSubscription;

  constructor(todoListService: TodoListService) {
    this.items = todoListService.getItems();
  }

  public ngAfterViewInit(): void {
    this.todoItemsSubscription = this.todoItems.changes.subscribe((todoItems) => {
      componentHandler.upgradeElement(todoItems.last.nativeElement.querySelector('[checkboxitem]'));
      const textField = todoItems.last.nativeElement.querySelector('.mdl-textfield');
      if (textField) {
        componentHandler.upgradeElement(textField);
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
