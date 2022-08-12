import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeTerritoriesComponent } from './employee-territories.component';


describe('EmployeeTerritoriesComponent', () => {
  let component: EmployeeTerritoriesComponent;
  let fixture: ComponentFixture<EmployeeTerritoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTerritoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTerritoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
