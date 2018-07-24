import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
@UpgradeDomAfterViewInit
export class TablesComponent {
  private Array = Array;

  private headers = [
    '#',
    'Book title',
    'Author',
    'First published',
    'Status',
  ];

  private simpleTable = [
    [
      '1',
      'To Kill a Mockingbird',
      'Harper Lee',
      '1960',
      'read',
    ],
    [
      '2',
      'Pride and Prejudice',
      'Jane Austen',
      '1813',
      'unread',
    ],
    [
      '3',
      'The Great Gatsby',
      'F. Scott Fitzgerald',
      '1925',
      'read',
    ],
    [
      '4',
      'Crime and Punishment',
      'Fyodor Dostoyevsky',
      '1866',
      'read',
    ],
  ];

  private borderedTable = [
    [
      '23',
      'Gone with the Wind',
      'Margaret Mitchell',
      '1936',
      'unread',
    ],
    [
      '24',
      'The Count of Monte Cristo',
      'Alexandre Dumas',
      '1845',
      'unread',
    ],
    [
      '25',
      'Lolita',
      'Vladimir Nabokov',
      '1955',
      'read',
    ],
    [
      '26',
      'The Hobbit',
      'J.R.R. Tolkien',
      '1937',
      'unread',
    ],
  ];

  private strippedTable = [
    [
      '54',
      'The Hitchhiker\'s Guide to th...',
      'Douglas Adams',
      '1979',
      'unavailable',
    ],
    [
      '55',
      'Madame Bovary',
      'Gustave Flaubert',
      '1856',
      'available',
    ],
    [
      '56',
      'David Copperfield',
      'Charles Dickens',
      '1850',
      'available',
    ],
    [
      '57',
      'War and Peace',
      'Leo Tolstoy',
      '1869',
      'available',
    ],
  ];

  private borderlessTable = [
    [
      '31',
      'The Little Prince',
      'Antoine de Saint-Exupery',
      '1943',
      'available',
    ],
    [
      '32',
      'Les Miserables',
      'Victor Hugo',
      '1862',
      'unavailable',
    ],
    [
      '33',
      'Alice in Wonderland',
      'Lewis Carroll',
      '1865',
      'available',
    ],
    [
      '34',
      'Anne of Green Gables',
      'L.M. Montgomery',
      '1908',
      'available',
    ],
  ];

  private advancedHeaders = [
    '#',
    'Book title',
    'Author',
    'Genre',
    'Year',
    'Originally published',
    'Language',
    'Original Language',
    'Availability',
  ];

  private advancedTable = [
    [
      '5',
      'Life of Pi',
      'Yann Martel',
      [
        'Fiction',
      ],
      '2016',
      '2001',
      'English',
      'English',
      4,
    ],
    [
      '6',
      'The secret Garden',
      'Frances Hodgson Burnett',
      [
        'Childeren\'s literature',
      ],
      '2017',
      '1911',
      'English',
      'English',
      1,
    ],
    [
      '7',
      'Rebecca',
      'Daphne du Maurier',
      [
        'Gothic fiction',
      ],
      '2016',
      '1938',
      'English',
      'English',
      2,
    ],
    [
      '8',
      'Dracula',
      'Bram Stoker',
      [
        'Gothic fiction',
        'Horror fiction',
      ],
      '2015',
      '1897',
      'English',
      'English',
      0,
    ],
  ];

  private genreColors = {
    'Childeren\'s literature': 'orange',
    'Gothic fiction': 'purple',
    'Horror fiction': 'dark-gray',
    Fiction: 'green',
  };
}
