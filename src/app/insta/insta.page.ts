import { Component } from '@angular/core';
import { IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-insta',
  templateUrl: './insta.page.html',
  styleUrls: ['./insta.page.scss'],
})
export class InstaPage {
  users = [
    { name: 'Eduardo', imageUrl: 'https://picsum.photos/id/184/640/480' },
    { name: 'Maria', imageUrl: 'https://picsum.photos/id/42/640/480' },
    { name: 'Juan', imageUrl: 'https://picsum.photos/640/480' },
    { name: 'Ana', imageUrl: 'https://picsum.photos/640/480' },
    { name: 'Carlos', imageUrl: 'https://picsum.photos/640/480' },
    { name: 'Lucía', imageUrl: 'https://picsum.photos/640/480' },
    { name: 'Pedro', imageUrl: 'https://picsum.photos/640/480' },
    { name: 'Sofía', imageUrl: 'https://picsum.photos/640/480' },
    { name: 'Jorge', imageUrl: 'https://picsum.photos/640/480' },
    { name: 'Daniela', imageUrl: 'https://picsum.photos/640/480' }
  ];

  nombres = [
    { Text: 'Eduardo' },
    { IonLabel: 'Luis' },
    { IonLabel: 'Hugo' },
    { IonLabel: 'Grecia' },
    { IonLabel: 'Valentin' },
  ]

  constructor() { }
}
