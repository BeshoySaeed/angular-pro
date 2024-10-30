import { Component } from '@angular/core';
import { SizeTransformerPipe } from '../pipes/size-transformer.pipe';

@Component({
  selector: 'app-pipe-pro',
  standalone: true,
  imports: [SizeTransformerPipe],
  templateUrl: './pipe-pro.component.html',
  styleUrl: './pipe-pro.component.scss',
  providers: [SizeTransformerPipe],
})
export class PipeProComponent {
  customData: any = 1000000;
  customData2: any = 223314;
  constructor(private sizePipe: SizeTransformerPipe) {}

  ngOnInit() {
    this.customData = this.sizePipe.transform(this.customData);
    this.customData2 = this.sizePipe.transform(this.customData2);
  }
}
