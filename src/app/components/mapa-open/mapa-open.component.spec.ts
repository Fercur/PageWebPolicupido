import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaOpenComponent } from './mapa-open.component';

describe('MapaOpenComponent', () => {
  let component: MapaOpenComponent;
  let fixture: ComponentFixture<MapaOpenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaOpenComponent]
    });
    fixture = TestBed.createComponent(MapaOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
