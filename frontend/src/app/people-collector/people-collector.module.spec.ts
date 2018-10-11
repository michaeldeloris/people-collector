import { PeopleCollectorModule } from './people-collector.module';

describe('PeopleCollectorModule', () => {
  let peopleCollectorModule: PeopleCollectorModule;

  beforeEach(() => {
    peopleCollectorModule = new PeopleCollectorModule();
  });

  it('should create an instance', () => {
    expect(peopleCollectorModule).toBeTruthy();
  });
});
