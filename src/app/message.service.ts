import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  //Function to return a message depicting the use of ASYNC Pipe
  getMessage(): Promise<string> {
    let message = "Hello from MessageService!";
    // return message;
    // return new Promise((resolve) => resolve(message));

    //delay 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, 3000);
    });
  }
}
