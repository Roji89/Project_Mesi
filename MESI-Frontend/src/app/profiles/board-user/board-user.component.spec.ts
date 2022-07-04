import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUserComponent } from './board-user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('BoardUserComponent', () => {
  let component: BoardUserComponent;
  let fixture: ComponentFixture<BoardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ BoardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
