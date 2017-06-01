import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { PersonService } from '../Services/person.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],

})
export class EditComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {

    this.personService.getExampleNames();
  }

}
