import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msgs: string[] | string
  msgs$: Observable<any[]>
  title = 'Angular Template';
  subscription: Subscription
  constructor(private messageService: MessageService){}
  ngOnInit(): void {
    this.subscription = this.messageService.msgs$.subscribe(msgs => {
      console.log('ngOnInit -> msgs', msgs);
      if (msgs.length === 0) return
      this.msgs = msgs
      setTimeout(() => {
        this.msgs = '';
      }, 2000)
    })
    this.messageService.save('Hello there!')
  }
}
