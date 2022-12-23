import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  height: number = 0;
  weight: number = 0;
  gender: string = '';
  routine: string[] = [];
  fitnessLevel: string = '';
  goals: string = '';
  mealPlan: string[] = [];

  constructor(public navCtrl: NavController) {

  }

  generateRoutine() {
    // Validate inputs
    if (isNaN(this.height) || !['male', 'female'].includes(this.gender)) {
      // Display error message
      return;
    }

    this.routine = [];
    if (this.gender === 'male') {
      // Generate routine for males
      if (this.height < 175) {
        this.routine.push('Push-ups: 3 sets of 10 reps');
        this.routine.push('Squats: 3 sets of 10 reps');
        this.routine.push('Lunges: 3 sets of 10 reps (per leg)');
        this.routine.push('Plank: 3 sets of 30 seconds');
      } else if (this.height >= 175 && this.height < 185) {
        this.routine.push('Push-ups: 3 sets of 12 reps');
        this.routine.push('Squats: 3 sets of 12 reps');
        this.routine.push('Lunges: 3 sets of 12 reps (per leg)');
        this.routine.push('Plank: 3 sets of 45 seconds');
      } else {
        this.routine.push('Push-ups: 3 sets of 15 reps');
        this.routine.push('Squats: 3 sets of 15 reps');
        this.routine.push('Lunges: 3 sets of 15 reps (per leg)');
        this.routine.push('Plank: 3 sets of 60 seconds');
      }
    } else {
      // Generate routine for females
      if (this.height < 165) {
        this.routine.push('Push-ups: 3 sets of 8 reps');
        this.routine.push('Squats: 3 sets of 8 reps');
        this.routine.push('Lunges: 3 sets of 8 reps (per leg)');
        this.routine.push('Plank: 3 sets of 20 seconds');
      } else if (this.height >= 165 && this.height < 175) {
        this.routine.push('Push-ups: 3 sets of 10 reps');
        this.routine.push('Squats: 3 sets of 10 reps');
        this.routine.push('Lunges: 3 sets of 10 reps (per leg)');
        this.routine.push('Plank: 3 sets of 30 seconds');
      } else {
        this.routine.push('Push-ups: 3 sets of 12 reps');
        this.routine.push('Squats: 3 sets of 12 reps');
        this.routine.push('Lunges: 3 sets of 12 reps (per leg)');
        this.routine.push('Plank: 3 sets of 45 seconds');
      }
      if (this.fitnessLevel === 'beginner') {
        this.routine.forEach((exercise, index) => {
          this.routine[index] = exercise.replace(/\d+ sets/g, '1 set');
          this.routine[index] = this.routine[index].replace(/\d+ reps/g, '8 reps');
        });
      } else if (this.fitnessLevel === 'intermediate') {
        this.routine.forEach((exercise, index) => {
          this.routine[index] = exercise.replace(/\d+ sets/g, '2 sets');
          this.routine[index] = this.routine[index].replace(/\d+ reps/g, '12 reps');
        });
      } else if (this.fitnessLevel === 'advanced') {
        this.routine.forEach((exercise, index) => {
          this.routine[index] = exercise.replace(/\d+ sets/g, '3 sets');
          this.routine[index] = this.routine[index].replace(/\d+ reps/g, '15 reps');
        });
      }
      
      if (this.goals === 'strength') {
        this.routine.forEach((exercise, index) => {
          this.routine[index] = exercise.replace(/\d+ reps/g, '8 reps');
        });
      } else if (this.goals === 'endurance') {
        this.routine.forEach((exercise, index) => {
          this.routine[index] = exercise.replace(/\d+ reps/g, '15 reps');
        });
        
      }
      
    }
    console.log(this.routine)
  }
 
}
