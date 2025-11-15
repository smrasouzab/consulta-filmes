import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-lista-categoria',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-categoria.html',
  styleUrls: ['./lista-categoria.scss']
})
export class ListaCategoriaComponent implements OnInit {
  conteudos: any[] = [];
  categoriaNome: string = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      
      this.apiService.getCategories().subscribe(cats => {
        const cat = cats.find((c: any) => c.slug === slug);
        if (cat) {
          this.categoriaNome = cat.name;
          this.apiService.getContentsByCategory(cat.id).subscribe(data => {
            this.conteudos = data;
          });
        }
      });
    });
  }
}