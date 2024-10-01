import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  orders: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.http.get<any[]>('http://localhost:3000/api/orders').subscribe(
      (response) => {
        this.orders = response;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
}
