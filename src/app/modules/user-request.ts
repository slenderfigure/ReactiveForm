export class UserRequest {
  userData: UserData;
  requestType: any;
  text: string;
}

export class UserData {
  firstname: string = '';
  mobile: string = '';
  country: string = '';
}