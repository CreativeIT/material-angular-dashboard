import { Injectable } from '@angular/core';

@Injectable()
export class MessageMenuService {
  public getMessages(): object[] {
    return [
      {
        name: 'Alice',
        type: 'Birthday Party',
        time: 'just now',
        icon: 'A',
        color: 'primary',
      },
      {
        name: 'Vladimir',
        type: 'Deployment',
        time: 'just now',
        icon: 'V',
        color: 'primary',
      },
      {
        name: 'Mike',
        type: 'No theme',
        time: '5 min',
        icon: 'M',
        color: 'baby-blue',
      },
      {
        name: 'Darth',
        type: 'Suggestion',
        time: '23 hours',
        icon: 'D',
        color: 'cerulean',
      },
      {
        name: 'Don McDuket',
        type: 'NEWS',
        time: '30 Nov',
        icon: 'D',
        color: 'mint',
      },
    ];
  }
}
