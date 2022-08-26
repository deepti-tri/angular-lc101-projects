import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images';
  image1 = 'https://media.istockphoto.com/vectors/woman-lies-with-laptop-on-armchair-concept-illustration-for-working-vector-id1330099622?b=1&k=20&m=1330099622&s=612x612&w=0&h=32W3YH1Bdvx2wrerRtc-CErxlHXNoCJpPQqTg2mUPMI=';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwigGSUbEb-YN1nGEtn7DOn4r3hnTV3pHsaw&usqp=CAU';
  image3 = 'https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?w=996&t=st=1661545472~exp=1661546072~hmac=24056aefb6ff5409933da45831f57a2ab0dfec772a780d0d2bbdc35d890f197d';

  constructor() { }

  ngOnInit() {
  }

}