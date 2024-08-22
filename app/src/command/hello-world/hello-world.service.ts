import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {

  sayHelloWorld(name?: string): void {
    name ??= 'anonymous';
    console.log('Hello, World!', name, '!');
  }

}
