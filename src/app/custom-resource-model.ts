import { ResourceModel, ResourceModelConfig } from '@bryntum/schedulerpro';

export interface ResourceModelCustomFields {
  description: string;
}

export class CustomResourceModel extends ResourceModel implements ResourceModelCustomFields {
  static get $name() {
    return 'CustomResourceModel';
  }

  static override get fields() {
    return [
      {
        name: 'description',
        type: 'string'
      }
    ];
  }

  public description: string;

  constructor(config?: Partial<ResourceModelConfig & ResourceModelCustomFields>) {
    super(config);
    this.description = config?.description || '';
    this.image = false;
  }
}
