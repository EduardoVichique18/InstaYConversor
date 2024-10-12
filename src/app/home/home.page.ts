import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fromCurrency: string = 'USD';
  toCurrency: string = 'MXN';
  amount: number = 0;
  convertedAmount: number | null = null;
  currencies: string[] = ['USD', 'EUR', 'MXN'];

  constructor(private http: HttpClient) { }

  convert() {
    const apiKey = '672a26c53df9d51a4940e5f4'; // Inserta tu API Key
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${this.fromCurrency}/${this.toCurrency}/${this.amount}`;

    this.http.get(url).subscribe((response: any) => {
      this.convertedAmount = response.conversion_result;
      this.saveToHistory();
    });
  }

  saveToHistory() {
    const conversion = {
      fromCurrency: this.fromCurrency,
      toCurrency: this.toCurrency,
      amount: this.amount,
      convertedAmount: this.convertedAmount,
      date: new Date()
    };

    let history = JSON.parse(localStorage.getItem('conversionHistory') || '[]');

    history.push(conversion);
    localStorage.setItem('conversionHistory', JSON.stringify(history));
  }
}
''