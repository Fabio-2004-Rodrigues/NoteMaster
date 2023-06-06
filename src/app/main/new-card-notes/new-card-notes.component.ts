import { Component } from '@angular/core';

@Component({
  selector: 'app-new-card-notes',
  templateUrl: './new-card-notes.component.html',
  styleUrls: ['./new-card-notes.component.css']
})
export class NewCardNotesComponent {

  anotacaoUsuario = {
    id: "1",
    titulo: "",
    anotacao: "",
  }

  salvarAnotacao() {
    alert("Anotação salva!!!")
  }

  cancelarAnotacao(){
    alert("Sua anotação foi cancelada")
  }

}
