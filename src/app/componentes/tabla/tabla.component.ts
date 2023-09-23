import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  
  productos: any;

  constructor(private http: HttpClient) {
    this.http.get('https://scratchya.com.ar/vue/datos.php').
    subscribe( (res) => {this.productos=res} )
    }
    
  }
