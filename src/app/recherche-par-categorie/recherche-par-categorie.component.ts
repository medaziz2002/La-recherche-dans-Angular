import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',

})
export class RechercheParCategorieComponent implements OnInit {

  produits! : Produit[];
  IdCategorie! : number;
  categories! : Categorie[];
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.categories=this.produitService.listeCategories();

  }
  onChange() {
    console.log(this.IdCategorie);
    this.produits=this.produitService.rechercherParCategorie(this.IdCategorie);
    }
    supprimerProduit(p: Produit)
    {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
      if (conf)
      {
        this.produits=this.produitService.rechercherParCategorie(this.IdCategorie);
    this.produitService.supprimerProduit(p);
      }
      }
}
