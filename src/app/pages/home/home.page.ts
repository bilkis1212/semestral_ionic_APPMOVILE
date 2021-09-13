import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router,private navController: NavController) {
    
  }
  irPagina1(){
    this.router.navigate(["/pag1"]);
  }
  //para definir una variable se ocupa
    //nombre:Tipo="valor inicial", los tipos string, number, boolean, any, Array
    usuario:string="carewm";
    contraseña:string;


    //crearemos controles de formularios asociados a la etiqueta <ion-input>
    //<ion-input [FormControl]="elRut"> </ion-input>
    persona = new FormGroup({
      elNombredeusuario : new FormControl(''),
      laContraseña : new FormControl(''),

    });


    //creacion de un arreglo
    lista_personas = new Array();

    //crear un registro de personas
    perso:any;

    //creacion de un metodo
    //////////////////////
    grabar1(){ //reserva :3
     console.log(this.persona.value);
     this.perso = {
       usuario:this.persona.controls.elNombredeusuario.value,
       contraseña:this.persona.controls.laContraseña.value,

     }
    }
    /////////////////////

    grabar(){
      this.perso={
        usuario: this.persona.controls.elNombredeusuario.value,
        contraseña: this.persona.controls.laContraseña.value,

      }
      this.lista_personas.push(this.perso);
      var datos = this.lista_personas;
      localStorage.setItem('misdatos', JSON.stringify(datos));
    }

    eliminar(){

    }
    listar(){

    }

}
