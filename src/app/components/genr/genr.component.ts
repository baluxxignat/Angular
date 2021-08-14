import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../models/genre";

@Component({
  selector: 'app-genr',
  templateUrl: './genr.component.html',
  styleUrls: ['./genr.component.css']
})
export class GenrComponent implements OnInit {

  @Input() genr: IGenre;

  constructor() { }

  ngOnInit(): void {
  }

}
