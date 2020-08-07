import { Component, OnInit } from '@angular/core';
interface Componente {
  icone: string;
  nome: string;
  link: string;
  subtitulo: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes: Componente[] = [
    { icone: 'alert-circle-outline', nome: 'Alerta', link: '/alert', subtitulo: 'Pagina de alerta'},
    { icone: 'albums-outline', nome: 'Modal', link: '/action-sheet', subtitulo: 'Pagina de Modal'},
    { icone: 'square-outline', nome: 'Cards', link: '/cards', subtitulo: 'Pagina de Cards'},
    { icone: 'calendar-outline', nome: 'Datas', link: '/datas', subtitulo: 'Pagina de datas'},
    { icone: 'grid-outline', nome: 'Grids', link: '/grid', subtitulo: 'Pagina de grids'},
    { icone: 'create-outline', nome: 'Inputs', link: '/inputs', subtitulo: 'Pagina de Input'},
    { icone: 'radio-button-on-outline', nome: 'Botões', link: '/botoes', subtitulo: 'Pagina de Input'},
    { icone: 'chatbox-outline', nome: 'Toasty', link: '/toasty', subtitulo: 'Pagina de Input'},
    { icone: 'layers-outline', nome: 'Slides', link: '/slide', subtitulo: 'Pagina de Input'},



  ];
  constructor() { }

  ngOnInit() {}

}
