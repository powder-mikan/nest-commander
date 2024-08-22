import { Module } from "@nestjs/common";
import { HelloWorldService } from "./hello-world.service";
import { HelloWorldCommand } from "./hello-world.command";

@Module({
  providers: [HelloWorldCommand, HelloWorldService],
})

export class HelloWorldModule {}
