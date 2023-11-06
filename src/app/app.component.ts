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

    setTimeout(() => this.#refresh(), 5000);
  }

  #initConfig(): void {
    this.schedulerProConfig = {
      startDate: new Date(2023, 9, 22, 0),
      endDate: new Date(2023, 11, 4, 0),
      viewPreset: 'weekAndDayLetter',
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
      },
      enableRecurringEvents: true
    };
  }

  #initData(): void {
    this.scheduler.instance.resourceStore
      .addAsync(resources)
      .then(() => this.scheduler.instance.eventStore.addAsync(events));
  }

  #refresh(): void {
    this.scheduler.instance.eventStore.removeAll();
    this.scheduler.instance.eventStore.addAsync(events).then(() => console.log('refreshed'));
  }
}
