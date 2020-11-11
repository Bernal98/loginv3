import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  Roles: any = ["Admin", "Author", "Reader"];

  form = new FormGroup({
    user: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    pass: new FormControl("", [Validators.required, Validators.minLength(6)]),
    passV: new FormControl("", [Validators.required])
  });

  constructor() {}

  ngOnInit() {}

  confirmPassMatch(controlpass: string, matchpass: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlpass];
      const matchingControl = formGroup.controls[matchpass];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPassMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  Registro() {
    //alert("Registro exitoso");
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }
}
