import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-ciro',
  templateUrl: './ciro.component.html',
  styleUrls: ['./ciro.component.css']
})
export class CiroComponent {
  items;
  checkoutForm;

  

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      nombreBanda:'',
      genero:'',
      cancion:''
    });
   }

 onSubmit(customerData) {
    // Process checkout data here
    console.warn('Banda creada con exito', customerData);

    this.checkoutForm.reset();
  }
}


