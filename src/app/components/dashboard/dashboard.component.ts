import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { RestService } from "src/app/services/rest.service";
import { environment } from '../../../environments/environment';
import { Question } from 'src/app/models/question';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public postQuestionForm = new FormGroup({
    question: new FormControl("")
  });
  public baseUrl = environment.baseUrl;
  public restUrl = environment.questionUrl.postQuestion;
  public showAnswerCard: boolean = false;
  public questionData: Question;
  public question: string;

  constructor(private restService: RestService<any>) {}

  ngOnInit() {}
  postQuestion(): void {
    this.questionData.question = this.postQuestionForm.value
    this.questionData.userId = window.localStorage.getItem('userId');
    this.restService
      .postData(this.baseUrl, this.restUrl, this.questionData).subscribe(data => {
        console.log(data);
        this.postQuestionForm.reset();
        this.showAnswerCard = true;       
      });
  }
}
