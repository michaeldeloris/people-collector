import { PeopleCollectorRoutingModule } from './people-collector-routing.module';

describe('PeopleCollectorRoutingModule', () => {
  let peopleCollectorRoutingModule: PeopleCollectorRoutingModule;

  beforeEach(() => {
    peopleCollectorRoutingModule = new PeopleCollectorRoutingModule();
  });

  it('should create an instance', () => {
    expect(peopleCollectorRoutingModule).toBeTruthy();
  });
});
