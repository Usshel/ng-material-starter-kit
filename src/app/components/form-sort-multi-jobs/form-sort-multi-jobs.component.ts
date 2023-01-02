import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, of, startWith } from 'rxjs';
import { JobsModel } from '../../models/jobs.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-form-sort-multi-jobs',
  templateUrl: './form-sort-multi-jobs.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSortMultiJobsComponent {

  readonly sortBy: FormGroup = new FormGroup({ prop: new FormControl(), direction: new FormControl() });
  readonly props: Observable<string[]> = of(['title', 'description'])
  readonly direction: Observable<string[]> = of(['asc', 'dsc'])

  readonly listJobs$: Observable<JobsModel[]> = combineLatest([
    this._jobsService.getAll(),
    this.sortBy.valueChanges.pipe(startWith({prop:'', direction:''}))
  ]).pipe(
    map(([job, sort]) =>{ 
      return job.sort((jobA, jobB) => {  //two level sorting
        if( sort.prop == 'title') return sort.direction == 'asc' ? jobA.title.localeCompare(jobB.title) : jobB.title.localeCompare(jobA.title);
        if( sort.prop == 'description') return sort.direction == 'dsc' ? jobB.description.localeCompare(jobA.description) : jobA.description.localeCompare(jobB.description);
        return 0
                                                                    // after 'dsc or asc ?' we cane use that:
                                                                    //(jobA.title.toLowerCase() < jobB.title.toLowerCase() ? 1 : -1) : (jobA.title.toLowerCase() < jobB.title.toLowerCase() ? -1 : 1)
      // if(sort.direction == 'asc' && sort.prop == 'title')         (jobB.description.ToLowerCase() < jobA.description.toLowerCase() ? 1 : -1) : (jobB.description.ToLowerCase() < jobA.description.toLowerCase() ? -1 : 1)
      // {                                                              instead of jobA.title.localCompare(JoB.title) :  jobB.title.localeCompare(jobA.title)
      //   return jobA.title.localeCompare(jobB.title)                
      // }else if
      // {
      //   return jobB.title.localeCompare(jobA.title)
      // }
      // if(sort.direction == 'dsc' && sort.prop == 'description')
      // {
      //   return jobA.description.localeCompare(jobB.description)
      // } 
      // else 
      // {
      //   return jobB.description.localeCompare(jobA.description)
      // }
    })
  }));





  constructor(private _jobsService: JobsService) {
    
  }

  onSortBySubmitted(sortBy: FormGroup): void {
  }
}
