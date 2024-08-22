import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloWorldModule } from './command/hello-world/hello-world.module';

@Module({
  imports: [
    HelloWorldModule
  ],
  providers: [AppService],
})
export class AppModule {}
