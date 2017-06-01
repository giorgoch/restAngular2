import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { PersonService } from '../Services/person.service';
import { Person } from './../model/person.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],

})
export class AddComponent implements OnInit {
  exampleName: Person = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.exampleName = this.personService.getExampleNames();
  }

}
