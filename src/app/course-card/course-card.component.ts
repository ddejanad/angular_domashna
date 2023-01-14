import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Course, suzi } from '../model/course';
import { Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor(){}

  
  @Input()

 indeks:number=0;

 @Input()

 crs:Course=suzi;

 @Output()
 Select=new EventEmitter<Course>();

 iconUrl(){
  return this.crs.iconUrl && this.crs;
 }

  ngOnInit(){

  }

  onCrsViewed()
  {
    console.log("kart element");
    this.Select.emit(this.crs);
  }



  cardStyle()
  {
    return{
      'background-image':'url('+this.crs.iconUrl+')'
    };
  }

  CardClasses()
  {
    
    return {
      'beginner':this.crs.category=='BEGGINER', 'advanced':this.crs.category=='ADVANCED', 'intermediate':this.crs.category=='ADVANCED'
    };
  
  }
}
