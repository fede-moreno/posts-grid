import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  constructor(public stateService: StateService) { }

  ngOnInit(): void {
  }
}
