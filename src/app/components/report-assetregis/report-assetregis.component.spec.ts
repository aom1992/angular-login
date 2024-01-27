import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAssetregisComponent } from './report-assetregis.component';

describe('ReportAssetregisComponent', () => {
  let component: ReportAssetregisComponent;
  let fixture: ComponentFixture<ReportAssetregisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportAssetregisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportAssetregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
