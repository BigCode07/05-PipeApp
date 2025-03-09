import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Nicolas',
  gender: 'Male',
  age: 26,
  address: 'Cordoba, Argentina',
};

const client2 = {
  name: 'Rocio',
  gender: 'Female',
  age: 27,
  address: 'Cordoba, Argentina',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18n Select
  client = signal(client1);

  invitationMap = {
    Male: 'invitarlo',
    Female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }
}
