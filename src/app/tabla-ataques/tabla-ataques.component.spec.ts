import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAtaquesComponent } from './tabla-ataques.component';

describe('TablaAtaquesComponent', () => {
  let component: TablaAtaquesComponent;
  let fixture: ComponentFixture<TablaAtaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAtaquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAtaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
