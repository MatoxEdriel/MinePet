import { Component, OnInit } from '@angular/core';
import { ToastMessage } from '../../../interfaces/IUser.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  imports: [CommonModule],
  standalone: true,
    styleUrls: ['./toast.component.css'],

})
export class ToastComponent implements OnInit {
  messages: ToastMessage[] = [] 
  private idCounter = 0;



  constructor() { }

  ngOnInit() {
  }



  show(text: string, type: 'success' | 'error' | 'info', duration = 2000) {
  const id = Date.now();
  const msg = { text, type, id, progress: 100 };
  this.messages.push(msg);

  const interval = 16; 
  const step = (interval / duration) * 100;

  const timer = setInterval(() => {
    msg.progress -= step;
    if (msg.progress <= 0) {
      clearInterval(timer);
      this.messages = this.messages.filter(m => m.id !== id);
    }
  }, interval);
}


  dismiss(id: number) {
    this.messages = this.messages.filter(msg => msg.id !== id);
  }

}
