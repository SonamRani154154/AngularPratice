import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  imports: [],
  templateUrl: './people.html',
  styleUrl: './people.css'
})
export class People {
  @Input() user:String='';

    @Input() city:String='';

}
