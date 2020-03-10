import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyedProductComponent } from './buyed-product.component';

describe('BuyedProductComponent', () => {
  let component: BuyedProductComponent;
  let fixture: ComponentFixture<BuyedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
