import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  message = 'Hellow from BridgeLabz';
  imageURL = "../assets/BL_logo_square.png"
  webURL = "https://www.BridgeLabz.com"
  userName = ""

  openWebsite($event: any){
    console.log("logo is clicked", $event);
    
    window.open(this.webURL, "_blank")
  }
}
