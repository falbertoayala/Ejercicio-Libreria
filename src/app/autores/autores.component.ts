import { Component, OnInit } from '@angular/core';
import { Autores } from '../shared/models/autores';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores : Array<Autores>;
  createMode : Boolean;
  autorSeleccionado : Autores;


  constructor(private usuarioService : UsuarioService ) {
    this.usuarioService;

   }

  ngOnInit() {
    this.usuarioService.getAutores()
    .subscribe((data: Array<Autores>)=>{
      this.autores = data.slice(0,10);
    },error =>{
      console.log("Error" + error)
    })
  }

}
