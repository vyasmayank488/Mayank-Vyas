import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12 center">
            <div class="carousel">
              <a class="carousel-item" href="#one!"
                ><img src="../assets/img/1.jpeg"
              /></a>
              <a class="carousel-item" href="#two!"
                ><img src="../assets/img/2.jpeg"
              /></a>
              <a class="carousel-item" href="#three!"
                ><img src="../assets/img/3.jpeg"
              /></a>
              <a class="carousel-item" href="#four!"
                ><img src="../assets/img/4.jpeg"
              /></a>
              <a class="carousel-item" href="#five!"
                ><img src="../assets/img/5.jpeg"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
