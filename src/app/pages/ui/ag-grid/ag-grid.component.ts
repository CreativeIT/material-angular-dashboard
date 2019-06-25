import { Component, HostListener } from '@angular/core';
import { ColDef, ColGroupDef, ColumnApi, GridApi, GridOptions, PaginationProxy } from 'ag-grid-community';
import { AgGridService } from './ag-grid.service';
import { AgAvailableComponent } from './components/ag-available.component';
import { AgLabelComponent } from './components/ag-label.component';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent {
  readonly columnElementsDef: ColDef[] = [
    { headerName: 'No.', field: 'position' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Weight', field: 'weight' },
    { headerName: 'Symbol', field: 'symbolType', cellRendererFramework: AgLabelComponent, comparator: this.labelComparatorByColor },
  ];

  // tslint:disable-next-line:prefer-array-literal
  readonly columnGroupedDefs: Array<ColGroupDef | ColDef> = [
    {
      headerName: 'Athlete',
      field: 'athlete',
      width: 150,
      filter: 'agTextColumnFilter',
      cellStyle: () => ({ 'padding-left': '16px' }),
    },
    {
      headerName: 'Age',
      field: 'age',
      width: 90,
      filter: 'agNumberColumnFilter',
    },
    {
      headerName: 'Country',
      field: 'country',
      width: 120,
    },
    {
      headerName: 'Sport',
      field: 'sport',
      width: 110,
    },
    {
      headerName: 'Medals',
      field: 'medals',
      openByDefault: true,
      headerClass: 'medals-group',
      children: [
        {
          headerName: 'Total',
          columnGroupShow: 'closed',
          field: 'total',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Gold',
          columnGroupShow: 'open',
          field: 'gold',
          width: 100,
          filter: 'agNumberColumnFilter',
          valueParser: this.numberParser,
          cellStyle: params => ({ color: this.numberToColor(params.value) }),
        },
        {
          headerName: 'Silver',
          columnGroupShow: 'open',
          field: 'silver',
          width: 100,
          filter: 'agNumberColumnFilter',
          valueParser: this.numberParser,
          cellStyle: params => ({ color: this.numberToColor(params.value) }),
        },
        {
          headerName: 'Bronze',
          columnGroupShow: 'open',
          field: 'bronze',
          width: 150,
          filter: 'agNumberColumnFilter',
          valueParser: this.numberParser,
          cellStyle: params => ({ color: this.numberToColor(params.value) }),
        },
      ],
    },
  ];
  readonly columnAdvancedDefs: ColDef[] = [
    { headerName: '#', field: 'id', minWidth: 50, width: 50, suppressSizeToFit: true },
    { headerName: 'Book title', field: 'title', sort: 'asc' },
    { headerName: 'Author', field: 'author' },
    { headerName: 'Genre', field: 'genres', cellRendererFramework: AgLabelComponent },
    { headerName: 'Year', field: 'year' },
    { headerName: 'Originally published', field: 'published' },
    { headerName: 'Language', field: 'language' },
    { headerName: 'Original Language', field: 'originalLanguage' },
    { headerName: 'Availability', field: 'count', cellRendererFramework: AgAvailableComponent },
  ];

  rowData = [];
  rowDataGrouped = [];
  gridOptions: GridOptions = {};
  gridOptionsAdvanced: GridOptions = {};
  gridApi: GridApi;
  gridApiGrouped: GridApi;
  gridApiAdvanced: GridApi;
  columnAdvancedApi: ColumnApi;
  paginationAdvanced: PaginationProxy;
  groupedIcons = {
    columnGroupOpened: `<i class="material-icons">keyboard_arrow_right</i>`,
    columnGroupClosed: '<i class="material-icons">keyboard_arrow_left</i>',
  };

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit();
    }
    if (this.gridApiAdvanced) {
      this.gridApiAdvanced.sizeColumnsToFit();
    }
    if (this.gridApiGrouped) {
      this.gridApiGrouped.sizeColumnsToFit();
    }

  }

  constructor(private dataService: AgGridService) {
    this.gridOptions = {
      rowData: [],
      columnDefs: this.columnElementsDef,
      defaultColDef: { sortable: true, filter: true, unSortIcon: true },
      context: { componentParent: this },
      onGridReady: (params) => {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridApi.setGridAutoHeight(true);
        this.dataService.getElementsData(8).subscribe((rowData) => {
          this.rowData = rowData;
          this.gridApi.setRowData(rowData);
        });
      },
    };

    this.gridOptionsAdvanced = {
      columnDefs: this.columnAdvancedDefs,
      overlayLoadingTemplate: `<span class='ag-overlay-loading-center'>Please wait while your rows are loading</span>`,
      animateRows: true,
      rowClass: 'bordered-table-row',
      context: { componentParent: this },
      defaultColDef: { sortable: true, filter: false, resizable: true },
      pagination: true,
      suppressPaginationPanel: true,
      paginationPageSize: 5,
      onRowDataChanged: (data: { api: { paginationProxy: PaginationProxy } | any }) => {
        this.paginationAdvanced = data.api.paginationProxy;
      },
      onPaginationChanged: () => {
        if (this.gridApiAdvanced) {
          this.gridApiAdvanced.sizeColumnsToFit();
        }
      },
      onGridReady: (params) => {
        this.gridApiAdvanced = params.api;
        this.columnAdvancedApi = params.columnApi;
        this.gridApiAdvanced.sizeColumnsToFit();
        this.gridApiAdvanced.showLoadingOverlay();
        this.gridApiAdvanced.setGridAutoHeight(true);
        this.dataService.getAdvancedData().subscribe((rowData) => {
          this.gridApiAdvanced.setRowData(rowData);
          this.gridApiAdvanced.hideOverlay();
          this.gridApiAdvanced.sizeColumnsToFit();
        });
      },
    };
  }

  onGridGroupedReady(params) {
    this.gridApiGrouped = params.api;
    this.gridApiGrouped.sizeColumnsToFit();
    this.gridApiGrouped.showLoadingOverlay();
    this.dataService.getGropedData()
      .subscribe((data) => {
        this.rowDataGrouped = data;
        this.gridApiGrouped.setRowData(this.rowDataGrouped);
        this.gridApiGrouped.hideOverlay();
      });
  }

  onDownload() {
    this.gridApiGrouped.exportDataAsCsv();
  }

  private labelComparatorByColor(a: { text: string, color: string }, b: { text: string, color: string }) {
    return a.color.localeCompare(b.color);
  }

  private numberToColor(val) {
    switch (val) {
      case 0:
        return '#f44336';
      case 1:
        return '#ffc107';
      default:
        return '#00d45a';
    }
  }

  private numberParser(params) {
    const newValue = params.newValue;
    let valueAsNumber;
    if (newValue === null || newValue === undefined || newValue === '') {
      valueAsNumber = null;
    } else {
      valueAsNumber = parseFloat(params.newValue);
    }
    return valueAsNumber;
  }

  private onColumnGroupOpened(event) {
    this.gridApiGrouped.sizeColumnsToFit();
  }
}
