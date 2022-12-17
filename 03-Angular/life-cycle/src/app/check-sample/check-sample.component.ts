import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy
 {

	quantidade: number = 0;
	novoEdf: number = 0;

  constructor() { }

	incrementar(){
		this.quantidade += 1;
	}

	decrementar(){
		this.quantidade -= 1;
	}

	ngAfterViewChecked(): void {
		console.log("AfterViewChecked");
	}
	ngAfterViewInit(): void {
		console.log("AfterViewInit");
	}
	ngAfterContentInit(): void {
		console.log("AfterContentInit");
	}
	ngAfterContentChecked(): void {
		console.log("AfterContentChecked");
	}
	ngDoCheck(): void {
		console.log("DoCheck");
		if(this.quantidade % 2 === 0){
			this.novoEdf++;
		}
	}

  ngOnInit(): void {
		console.log("NgOnInit");
  }

	ngOnDestroy(): void {
		console.log("Adeus meu amigo.");
	}


}
