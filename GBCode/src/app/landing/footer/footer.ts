import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,  // <--- ESSA LINHA É A CHAVE!
  imports: [CommonModule], // <--- Aqui ele declara o que USA
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
