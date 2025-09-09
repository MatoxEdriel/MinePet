import { Component, OnInit } from '@angular/core';
import { TableSharedComponent } from "../../../../../shared/components/table-shared/table-shared.component";
import { IUser } from '../../../../../interfaces/IUser.interface';

@Component({
  selector: 'app-Consultations',
  templateUrl: './Consultations.component.html',
  styleUrls: ['./Consultations.component.css'],
  imports: [TableSharedComponent]
})
export class ConsultationsComponent implements OnInit {

  accounts: IUser[] = []


   constructor( 

   ) { }



  columns = [
  { key: 'name', label: 'Nombre' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Rol' }
];

users = [
  { name: 'Matox', email: 'matox@example.com', role: 'Admin' },
  { name: 'Ana', email: 'ana@example.com', role: 'User' }
];

  ngOnInit() {
  }

}
