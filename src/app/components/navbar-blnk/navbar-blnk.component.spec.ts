import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBlnkComponent } from './navbar-blnk.component';

describe('NavbarBlnkComponent', () => {
  let component: NavbarBlnkComponent;
  let fixture: ComponentFixture<NavbarBlnkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBlnkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarBlnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
