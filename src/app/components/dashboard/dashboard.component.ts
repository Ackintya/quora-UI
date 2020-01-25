import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { RestService } from "src/app/services/rest.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public postQuestionForm = new FormGroup({
    question: new FormControl("")
  });
  public baseUrl: string = "";
  public restUrl: string = "";
  public showAnswerCard: boolean = false;

  public question: string;

  constructor(private restService: RestService<any>) {}

  ngOnInit() {}
  postQuestion(): void {
    console.log("posted", this.postQuestionForm.value);
    this.restService
      .postData(this.baseUrl, this.restUrl, this.postQuestionForm.value)
      .subscribe(data => {
        console.log(data);
        this.postQuestionForm.reset();
        this.showAnswerCard = true;
      });
  }
}
