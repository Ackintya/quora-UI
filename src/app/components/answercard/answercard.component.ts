import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-answercard',
  templateUrl: './answercard.component.html',
  styleUrls: ['./answercard.component.css']
})
export class AnswercardComponent implements OnInit {

  @Input() questionsData: Question[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.questionsData);
  }

}
