import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { TableColumn, TableOptions } from './interfaces/table-interface';

@Component({
  selector: 'app-table-shared',
  templateUrl: './table-shared.component.html',
  styleUrls: ['./table-shared.component.css'],
  standalone: true ,
  imports: [CommonModule, FormsModule]
 
})
export class TableSharedComponent implements OnInit {


  @Input() data: any[] = [];
  @Input() dataColumns: TableColumn[] = [];
  @Input() options: TableOptions = {
    search: true , 
    filter: true,
    pagination: true


  }

  toggleColumn(column: TableColumn) {
    column.visible = !column.visible


  }


  

  get visibleColumns(){
        return this.dataColumns.filter(c => c.visible !== false);
  }

  searchText: string = '';


  constructor() { }

  ngOnInit() {
  }




    filteredData() {
    if (!this.searchText) return this.data;
    return this.data.filter(row =>
      this.visibleColumns.some(col =>
        String(row[col.key]).toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

}
