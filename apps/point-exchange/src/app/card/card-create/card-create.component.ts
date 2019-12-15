import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gapp-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  constructor(private route:Router) { }

  onBack(){
    this.route.navigate(['/card'])
  }

  ngOnInit() {
  }

}
