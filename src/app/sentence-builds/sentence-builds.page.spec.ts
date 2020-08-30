import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SentenceBuildsPage } from './sentence-builds.page';

describe('SentenceBuildsPage', () => {
  let component: SentenceBuildsPage;
  let fixture: ComponentFixture<SentenceBuildsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceBuildsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SentenceBuildsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
