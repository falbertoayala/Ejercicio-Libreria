import { Component, OnInit } from '@angular/core';
import { Autores } from '../shared/models/autores';
import { UsuarioService } from '../shared/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-autor',
  templateUrl: './detalle-autor.component.html',
  styleUrls: ['./detalle-autor.component.css']
})
export class DetalleAutorComponent implements OnInit {

  autores : Autores;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) { 

    this.usuarioService = usuarioService;
    this.route = route;

  }

  ngOnInit() {
    this.route.paramMap
    .subscribe(parameters =>{
      let id = Number(parameters.get("id"));
      // this.getDetalleAutor(id);
    })
    
  }

}
