export class Job {
  callerAttributes: string;
  jobArguments: JobArguments[];
  serviceArguments: ServiceArgument;


  constructor() {
    this.callerAttributes = ''
    this.jobArguments = [];
    this.serviceArguments = new ServiceArgument();
  }
}

export class JobArguments {
  name: string;
  value: string;


  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

export class ServiceArgument {
  infraId: string;
  processId: string;
  user: string;

  constructor() {
    this.infraId = null;
    this.processId = null;
    this.user = null;
  }
}
