import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant/restaurant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(
    private restaurantService: RestaurantService,
    private activetedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.activetedRoute.snapshot.params['id'])
      .subscribe(res => this.restaurant = res)
  }

}
