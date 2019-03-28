import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarContatosComponent } from './adicionar-contatos.component';

describe('AdicionarContatosComponent', () => {
  let component: AdicionarContatosComponent;
  let fixture: ComponentFixture<AdicionarContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
