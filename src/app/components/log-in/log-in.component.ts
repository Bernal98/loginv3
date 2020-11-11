import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  form = new FormGroup({
    user: new FormControl("", Validators.required),
    pass: new FormControl("", [Validators.required, Validators.minLength(6)])
  });

  constructor() {}

  ngOnInit() {}
  Login() {
    alert("Has ingresado correctamente");
  }
}
