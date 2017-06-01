import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { PersonService } from '../Services/person.service';
import { Person } from './../model/person.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],

})
export class AddComponent implements OnInit {


  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getExampleNames();
  }

}
