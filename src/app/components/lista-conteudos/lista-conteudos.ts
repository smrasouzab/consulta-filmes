import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-lista-conteudos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-conteudos.html',
  styleUrls: ['./lista-conteudos.scss']
})
export class ListaConteudosComponent implements OnInit {
  conteudos: any[] = [];
  categorias: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getContents().subscribe(data => {
      this.conteudos = data;
    });

    this.apiService.getCategories().subscribe(data => {
      this.categorias = data;
    });
  }
}