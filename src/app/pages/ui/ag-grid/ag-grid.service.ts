import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable()
export class AgGridService {
  public elementsData = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', type: 'non metal' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', type: 'noble gas' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', type: 'alkali metal' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', type: 'alkaline earth metal' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', type: 'metalloid' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', type: 'non metal' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', type: 'non metal' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', type: 'non metal' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', type: 'halogen' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', type: 'noble gas' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', type: 'alkali metal' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', type: 'alkaline earth metal' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', type: 'metal' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', type: 'metalloid' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', type: 'non metal' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', type: 'non metal' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', type: 'halogen' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', type: 'noble gas' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', type: 'alkali metal' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', type: 'alkaline earth metal' },
  ];

  public advanceTableData = [
    {
      id: '5',
      title: 'Life of Pi',
      author: 'Yann Martel',
      genre: ['Fiction'],
      year: '2016',
      published: '2001',
      language: 'English',
      originalLanguage: 'English',
      count: 4,
    },
    {
      id: '6',
      title: 'The secret Garden',
      author: 'Frances Hodgson Burnett',
      genre: ['Children\'s book'],
      year: '2017',
      published: '1911',
      language: 'English',
      originalLanguage: 'English',
      count: 1,
    },
    {
      id: '7',
      title: 'Rebecca',
      author: 'Daphne du Maurier',
      genre: [
        'Gothic fiction',
      ],
      year: '2016',
      published: '1938',
      language: 'English',
      originalLanguage: 'English',
      count: 2,
    },
    {
      id: '8',
      title: 'Dracula',
      author: 'Bram Stoker',
      genre: [
        'Gothic fiction',
        'Horror fiction',
      ],
      year: '2015',
      published: '1897',
      language: 'English',
      originalLanguage: 'English',
      count: 0,
    },
    {
      id: '9',
      title: 'The Little Prince',
      author: 'Antoine de Saint-Exupery',

      genre: ['Fiction'],
      year: '2015',
      published: '1943',
      language: 'English',
      originalLanguage: 'French',
      count: 1,
    },
    {
      id: '10',
      title: 'Les Miserables',
      author: 'Victor Hugo',
      genre: [
        'Novel',
        'Fiction',
      ],
      year: '2014',
      published: '1862',
      language: 'English',
      originalLanguage: 'French',
      count: 3,
    },
    {
      id: '11',
      title: 'Alice in Wonderland',
      author: 'Lewis Carroll',
      genre: [
        'Children\'s book',
        'Fantasy',
      ],
      year: '2018',
      published: '1865',
      language: 'English',
      originalLanguage: 'English',
      count: 4,
    },
    {
      id: '12',
      title: 'Anne of Green Gables',
      author: 'L.M. Montgomery',
      genre: ['Novel',
      ],
      year: '2019',
      published: '1908',
      language: 'English',
      originalLanguage: 'English',
      count: 3,
    },
    {
      id: '13',
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      author: 'Douglas Adams',
      genre: [
        'Adventure',
        'Fiction',
      ],
      year: '2017',
      published: '1979',
      language: 'English',
      originalLanguage: 'English',
      count: 3,
    }, {
      id: '14',
      title: 'Madame Bovary',
      author: 'Gustave Flaubert',
      genre: ['Novel'],
      year: '2018',
      published: '1856',
      language: 'English',
      originalLanguage: 'French',
      count: 2,
    },
  ];

  public genreColors = {
    'Children\'s book': 'orange',
    'Gothic fiction': 'purple',
    'Horror fiction': 'dark-gray',
    'Fiction': 'green',
    'Novel': 'teal',
    'Fantasy': 'red',
    'Adventure': 'light-blue',
  };

  public elementTypeColors = {
    'non metal': 'smooth-gray',
    'noble gas': 'cerulean',
    'alkali metal': 'amber',
    'alkaline earth metal': 'red',
    'halogen': 'baby-blue',
    'metalloid': 'mint',
    'metal': 'green',
  };

  constructor(public http: HttpClient) {
  }

  getGropedData(): Observable<any[]> {
    return this.http.get<any[]>('./assets/data/ag-grid.data.json');
  }

  getAdvancedData(): Observable<any[]> {
    return of(this.advanceTableData)
      .pipe(
        switchMap((data) => {
          return of(data.map((item) => {
            let row;
            if (item.genre) {
              const genres = item.genre.map(genre => ({
                text: genre,
                color: this.genreColors[genre],
              }));
              row = { ...item, genres };
            }
            return (row) ? row : item;
          }));
        }),
        delay(3000));
  }

  getElementsData(count: number = 5): Observable<any[]> {
    return of(this.elementsData)
      .pipe(
        switchMap((data) => {
          const randomData = [];
          while (randomData.length < count) {
            const item = this.getRandomItem(data);
            if (!randomData.find(element => element.position === item.position)) {
              randomData.push(item);
            }
          }
          return of(randomData.map((item) => {
            return { ...item, symbolType: { text: item.symbol, color: this.elementTypeColors[item.type] } };
          }));
        }),
      );
  }

  public getRandomItem(items: any[]) {
    return items[Math.floor(Math.random() * items.length)];
  }
}
