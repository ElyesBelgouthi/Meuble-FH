import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsEditComponent } from './items-edit.component';

describe('ItemsEditComponent', () => {
  let component: ItemsEditComponent;
  let fixture: ComponentFixture<ItemsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsEditComponent]
    });
    fixture = TestBed.createComponent(ItemsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
