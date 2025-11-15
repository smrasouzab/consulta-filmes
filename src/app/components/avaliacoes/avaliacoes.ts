import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-avaliacoes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './avaliacoes.html',
  styleUrls: ['./avaliacoes.scss']
})
export class AvaliacoesComponent implements OnInit {
  avaliacoes: any[] = [];
  contentId: string = '';
  
  novaAvaliacao = {
    authorName: '',
    rating: 5,
    title: '',
    comment: ''
  };

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contentId = params['id'];
      this.carregarAvaliacoes();
    });
  }

  carregarAvaliacoes() {
    this.apiService.getReviews(this.contentId).subscribe(data => {
      this.avaliacoes = data;
    });
  }

  enviarAvaliacao() {
    const avaliacao = {
      ...this.novaAvaliacao,
      contentId: this.contentId,
      authorAvatar: 'https://via.placeholder.com/50'
    };

    this.apiService.addReview(avaliacao).subscribe(() => {
      this.carregarAvaliacoes();
      this.novaAvaliacao = {
        authorName: '',
        rating: 5,
        title: '',
        comment: ''
      };
    });
  }

  getStars(rating: number): string[] {
    return Array(5).fill('').map((_, i) => i < rating ? '★' : '☆');
  }
}