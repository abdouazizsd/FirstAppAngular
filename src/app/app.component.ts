import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title:  string = 'FirstAppAngular';
  constructor(private router: Router){

  }
  
  goToProdut() {
    this.router.navigateByUrl("/products");
    }

    goToHome() {
      this.router.navigateByUrl("/home")
    }
}
