import { Component, OnInit } from '@angular/core';
import {SearchRowService} from "../../search-row/search-row.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private searchRowService: SearchRowService) { }

  ngOnInit() {
  }

}
