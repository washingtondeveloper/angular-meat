import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = []

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
