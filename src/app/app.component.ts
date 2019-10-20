import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  animations: [                                     //will attempt angular animations here 
    
  ]
})
export class AppComponent {
  bindedWord; 

  pigLatinify(word) {
    if(word.length < 3) {
      return word; 
    }
    return word.slice(1) + '-' + word[0].toLowerCase() + 'ay'; 
  }


  onKey(typed) {
    of(typed).pipe(
      map(event => event.target.value), 
      map(wordString => wordString.split(/\s+/)), 
      map(wordArray => wordArray.map(this.pigLatinify))
    ).subscribe(
      translated => this.bindedWord = translated
    );
  
    this.bindedWord = this.bindedWord.join(" ");
  }

}
