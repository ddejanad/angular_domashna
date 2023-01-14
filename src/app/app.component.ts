import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


crs=COURSES;

onAppViewed()
{
  console.log("app is not cuci");
}
Select(crs:Course){
  console.log("Select", this.crs);
}
}
