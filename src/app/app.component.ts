import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Todo, UserDataService } from './services/user-data.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usersData: Todo[] = [];
  constructor(private userdata: UserDataService) {}

  ngOnInit() {
    this.userdata.users().subscribe((data: Todo[]) => {
      this.usersData = data;
      // console.log(this.usersData);
    });
  }
  title: string = 'App';
  displayVal: string = '';

  getValue(val: string) {
    console.warn(val);
    this.displayVal = val;
  }
  //title: string='Counter';
  count = 0;
  getCounter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }

  // show = false

  color = 'green';
  bgColor = 'yellow';
  colorTitle = 'Style Binding';

  users = ['Dolly', 'Mohit', 'Prince', 'Kirti', 'Kajal', 'Mini'];
  userDetails = [
    {
      name: 'Dolly',
      email: 'dolly@test.com',
      phone: '99999',
      socialAccounts: ['facebook', 'insta', 'twitter'],
    },
    {
      name: 'Mohit',
      email: 'mohit@test.com',
      phone: '88888',
      socialAccounts: ['youtube', 'insta', 'twitter'],
    },
    {
      name: 'Prince',
      email: 'prince@test.com',
      phone: '77777',
      socialAccounts: ['facebook', 'insta', 'linkedin'],
    },
    {
      name: 'Kirti',
      email: 'kirti@test.com',
      phone: '66666',
      socialAccounts: ['facebook', 'yahoo', 'twitter'],
    },
    {
      name: 'Kajal',
      email: 'kajal@test.com',
      phone: '55555',
      socialAccounts: ['skype', 'insta', 'twitter'],
    },
    {
      name: 'Mini',
      email: 'mini@test.com',
      phone: '44444',
      socialAccounts: ['facebook', 'youtube', 'twitter'],
    },
  ];

  updateColor() {
    this.color = 'blue';
    this.bgColor = 'orange';
  }

  userData: any = {};
  getData(data: NgForm) {
    this.userData = data;
  }

  display = true;
  toggle() {
    this.display = !this.display;
  }

  @ViewChild('taskInput') taskInputRef!: ElementRef;

  list: any[] = [];
  addTask() {
    const inputField = this.taskInputRef.nativeElement;
    const item = inputField.value.trim();
    if (item) {
      this.list.push({ id: this.list.length, name: item });
      inputField.value = '';
    }
    console.warn(this.list);
  }
  removeTask(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }

  data: any = 'child component';
  updateChild() {
    this.data = Math.floor(Math.ceil(Math.random() * 10));
  }

  userInfo = [
    { name: 'Dolly', email: 'dolly@test.com' },
    { name: 'Mohit', email: 'mohit@test.com' },
    { name: 'Kajal', email: 'kajal@test.com' },
    { name: 'Mini', email: 'mini@test.com' },
  ];
  val = 'x';
  updateData(item: string) {
    console.warn(item);
    this.val = item;
  }

  getVal(item: HTMLInputElement) {
    console.log(item.value);
    item.value = '';
  }

  tag = 'Angular Basic Pipes';
  today = Date();
  // user = {
  //   name: 'dolly',
  //   age: 25,
  // };
  // userLogin(item: any) {
  //   console.log(item);
  // }

  loginForm = new FormGroup({
    // user: new FormControl('', [Validators.required, Validators.email]),
    user: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  loginUser() {
    console.log(this.loginForm.value);
  }
  get userValidator() {
    return this.loginForm.get('user');
  }
  get passwordValidator() {
    return this.loginForm.get('password');
  }
}
