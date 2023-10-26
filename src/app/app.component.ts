import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SchedulerProConfig } from '@bryntum/schedulerpro';
import { BryntumSchedulerProComponent, BryntumSchedulerProModule } from '@bryntum/schedulerpro-angular';

import { CustomEventModel } from './custom-event-model';
import { CustomResourceModel } from './custom-resource-model';
import { events } from './events';
import { resources } from './resources';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BryntumSchedulerProModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(BryntumSchedulerProComponent) protected scheduler!: BryntumSchedulerProComponent;

  protected schedulerProConfig!: Partial<SchedulerProConfig>;

  public ngOnInit(): void {
    this.#initConfig();
  }

  public ngAfterViewInit(): void {
    this.#initData();
  }

  #initConfig(): void {
    this.schedulerProConfig = {
      startDate: new Date(2023, 9, 25, 0),
      endDate: new Date(2023, 9, 26, 0),
      viewPreset: 'hourAndDay',
      columns: [
        {
          type: 'resourceInfo',
          text: 'Name',
          field: 'name',
          minWidth: 280
        }
      ],
      resourceStore: {
        modelClass: CustomResourceModel
      },
      eventStore: {
        modelClass: CustomEventModel
      }
    };
  }

  #initData(): void {
    this.scheduler.instance.resourceStore
      .addAsync(resources)
      .then(() => this.scheduler.instance.eventStore.addAsync(events));
  }
}
