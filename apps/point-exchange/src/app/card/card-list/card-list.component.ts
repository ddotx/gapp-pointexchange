import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gapp-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(private route:Router) { }

onEdit(){
  this.route.navigate(['/card/edit'])
}

  ngOnInit() {
  }

}
