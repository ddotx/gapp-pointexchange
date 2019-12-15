import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gapp-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor(private route:Router) { }

  onBack(){
    this.route.navigate(['/card'])
  }

  ngOnInit() {
  }

}
