import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html"
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  mobParts = [
    {
      id: 1001,
      name: "Screen 5.5",
      description: "5.5 Screen for Moto g",
      inStock: 5,
      prodNameColor: "red",
      isOnline: false
    },
    {
      id: 1002,
      name: "Screen 5",
      description: "5 Screen for Samsung",
      inStock: 8,
      prodNameColor: "green",
      isOnline: false
    },
    {
      id: 1003,
      name: "key panel",
      description: "Key panel for Nokia",
      inStock: 0,
      prodNameColor: "blue",
      isOnline: true
    }
  ];
}
