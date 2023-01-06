import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  sliders: object[];

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.getData().subscribe((result: any) => {
      this.sliders = result.sliders;
    });

  }


}
