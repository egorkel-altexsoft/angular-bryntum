import { EventModel, EventModelConfig } from '@bryntum/schedulerpro';

export interface EventModelCustomFields {
  type: string;
}

export class CustomEventModel extends EventModel implements EventModelCustomFields {
  static get $name() {
    return 'CustomEventModel';
  }

  static override get fields() {
    return [
      {
        name: 'type',
        type: 'string'
      },
      {
        name: 'resourceIds',
        persist: true
      }
    ];
  }

  public type: string;

  constructor(config?: Partial<EventModelConfig & EventModelCustomFields>) {
    super(config);
    this.type = config?.type || '';
  }
}
