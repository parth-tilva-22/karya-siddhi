import { Component, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  faCircleCheck = faCirclePlus;

  taskList = [{
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  }   ]

  constructor() { }

  ngOnInit(): void {
  }

}
