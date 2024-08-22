import { Command, CommandRunner, Option } from "nest-commander";
import { Logger } from "@nestjs/common";
import { HelloWorldService } from "./hello-world.service";

type HelloWorldCommandOptions = {
  name?: string;
  boolean?: boolean;
  number?: number;
}

@Command({
  name: 'hello-world',
  description: 'Prints "Hello, World!"'
})
export class HelloWorldCommand extends CommandRunner {

  constructor(private service: HelloWorldService) {
    super();
  }

  @Option({
    flags: '-n, --name [string]',
    description: 'your name',
  })
  parseName(val: string): string {
    return val;
  }

  async run(passedParams: string[], options?: HelloWorldCommandOptions): Promise<void> {
    Logger.log({ passedParams, options }, HelloWorldCommand.name);

    await this.service.sayHelloWorld(options?.name);

    return Promise.resolve();
  }
}
