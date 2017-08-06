import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('input') obj;

  avatar: string;
  userName: string = "Haider";
  loading: any;
  chatId: any = "123";
  threadMessages: any;
  userIds: any;
  socketHost: string = "API.URL";
  socket: any;
  zone: any;
  messages: Array<Object>;
  chatInput: string = '';
  onlineUsers: Array<number>;
  user: any;      // active user
  opponentId: any;
  showError: boolean = false;
  limit: number = 20;
  offset: number = 0;
  noOlder: boolean = false;
  constructor(public navCtrl: NavController) {
  }
  sendChatMessage(chatInput, e){
    this.obj.nativeElement.focus();
    alert("send");
  }
}
