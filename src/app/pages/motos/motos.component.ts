import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoService } from '../../core/services/moto.service';
import { Moto } from '../../models/moto.model';


@Component({
 selector: 'app-motos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css'],
})
export class MotosComponent implements OnInit {
  motos: Moto[] = [];

  constructor(private motoService: MotoService) {}

  ngOnInit(): void {
    this.motoService.getMotos().subscribe((data: Moto[]) => {

      this.motos = data;
    });
  }
  deleteMoto(id: number | undefined): void {
    if (id) {
      this.motoService.deleteMoto(id).subscribe(() => {
        this.motos = this.motos.filter((m) => m.id !== id);
      });
    }
  }
  

}
