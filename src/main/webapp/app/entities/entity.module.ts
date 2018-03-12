import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FlameCodingRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { FlameCodingCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { FlameCodingLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { FlameCodingDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { FlameCodingTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { FlameCodingEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { FlameCodingJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { FlameCodingJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        FlameCodingRegionMySuffixModule,
        FlameCodingCountryMySuffixModule,
        FlameCodingLocationMySuffixModule,
        FlameCodingDepartmentMySuffixModule,
        FlameCodingTaskMySuffixModule,
        FlameCodingEmployeeMySuffixModule,
        FlameCodingJobMySuffixModule,
        FlameCodingJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlameCodingEntityModule {}
