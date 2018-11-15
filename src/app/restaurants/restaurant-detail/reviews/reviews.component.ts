import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(
    private restaurantService: RestaurantService,
    private activetedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService
      .reviewsOfRestaurant(this.activetedRouter.parent.snapshot.params['id'])
  }

}
