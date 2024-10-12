import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  conversionHistory: any[] = [];

  ngOnInit() {
    this.loadHistory();
  }

  loadHistory() {
    this.conversionHistory = JSON.parse(localStorage.getItem('conversionHistory') || '[]');

  }

  clearHistory() {
    localStorage.removeItem('conversionHistory');
    this.loadHistory();
  }
}
