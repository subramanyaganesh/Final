import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigformComponent } from './configform.component';

describe('ConfigformComponent', () => {
  let component: ConfigformComponent;
  let fixture: ComponentFixture<ConfigformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
