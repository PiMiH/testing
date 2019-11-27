import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private liveAnnouncer: LiveAnnouncer,) {
    const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    const thArr = document.getElementById('test-table').querySelectorAll('th');
    for (let i = 0; i < thArr.length; i++) {
      const thBtn = thArr[i].querySelector('button');
      thBtn.setAttribute('aria-hidden', 'true');
      thBtn.setAttribute('tabindex', '-1');
      thArr[i].querySelector('div > button > span')['onfocus'] = ()=>this.liveAnnouncer.announce("col "+(i+1)+" row 1");
    }
  }

  createNewUser(id: number): any {
    const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal','aqua', 'blue', 'navy', 'black', 'gray'];
    const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver','Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
    return {
      id: id.toString(),
      name: NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.' ,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
}