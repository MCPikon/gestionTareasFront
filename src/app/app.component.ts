import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestionTareasFront';
  year: number;

  ngOnInit() {
    // fecha a mostrar en el footer del componente html
    this.year = new Date().getFullYear();
  }
}
