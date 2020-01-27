import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { RestService } from "src/app/services/rest.service";
import { environment } from "../../../environments/environment";
import { Question } from "src/app/models/question";

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
  public questionData: Question = new Question();
  public questionsData: Question[] = [];
  public question: string;

  constructor(private restService: RestService<any>) {}

  ngOnInit(): void {
    this.getAllQuestions();
  }
 public postQuestion(): void {
    this.questionData.question = this.postQuestionForm.get("question").value;
    this.questionData.userId = window.localStorage.getItem("userId");
    this.restService
      .postData(this.baseUrl, this.restUrl, this.questionData)
      .subscribe(data => {
        this.postQuestionForm.reset();
      });
  }
  
  public getAllQuestions(): void {
    this.restService.getData(this.baseUrl, this.restUrl).subscribe((data: Question[]) =>{
    if(data) {
      this.questionsData = data;
      this.showAnswerCard = true;
    }
    });
  }

}
