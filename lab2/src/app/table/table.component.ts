import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  students = []


  constructor() { }

  ngOnInit() {
    this.masive = [
      {name:'dato',
      lastname:'seiranovi',
      status:'student',
      id:'25001892043'
    },
     {name:'vaxo',
     lastname:'ozgebishvili',
     status:'Student',
     id:'25561843043'
  },
    {name:'lasha',
    lastname:'tsevelidze',
    status:'Student',
    id:'25001892043'
}

]
    
  }
  

}
