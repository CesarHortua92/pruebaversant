import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SentenceCompletionPage } from './sentence-completion.page';

describe('SentenceCompletionPage', () => {
  let component: SentenceCompletionPage;
  let fixture: ComponentFixture<SentenceCompletionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceCompletionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SentenceCompletionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
