import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TypeWriter } from "@omnedia/rxjs-typewriter";
import { Observable, map } from "rxjs";

@Component({
  selector: "om-typewriter",
  standalone: true,
  imports: [CommonModule],
  providers: [TypeWriter],
  templateUrl: "./ngx-typewriter.component.html",
  styleUrl: "./ngx-typewriter.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class NgxTypewriterComponent implements OnInit {
  @Input({ required: true, alias: "words" })
  words!: string[];

  @Input("disableLoop")
  disableLoop?: boolean;

  @Input("writeSpeed")
  writeSpeed?: number;

  @Input("deleteDelay")
  deleteDelay?: number;

  @Input("writeDelay")
  writeDelay?: number;

  @Input("styleClass")
  styleClass?: string;

  typeWriterText$?: Observable<string>;

  constructor(private readonly typeWriter: TypeWriter) {}

  ngOnInit(): void {
    if (!this.words) {
      throw Error("[words] is required!");
    }

    this.typeWriterText$ = this.typeWriter
      .typeWriteEffect(
        this.words,
        this.disableLoop ? false : true,
        this.writeSpeed,
        this.deleteDelay,
        this.writeDelay
      )
      .pipe(map((text) => text));
  }
}
