import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,  // <--- ESSA LINHA É A CHAVE!
  imports: [CommonModule], // <--- Aqui ele declara o que USA
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
