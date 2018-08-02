import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  public getItems(): object[] {
    return [
      {
        title: 'Fix bugs',
        id: 1651644545,
        completed: false,
      },
      {
        title: 'Implement 30% of my feature',
        id: 1651646545,
        completed: false,
      },
      {
        title: 'Fencing',
        id: 5451646545,
        completed: true,
      },
      {
        title: 'Read an article about Test-Driven Development',
        id: 5428646545,
        completed: false,
      },
    ];
  }
}
