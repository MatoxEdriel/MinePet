export interface IUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  alias: string;
}

export interface IResponse<T> {
  data: T;
  statusCode: number;
  message: string;
  registers_count: number;
  error: string;
}


export interface IFeeback{
    success: string,
    error: string
}




export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  userId: number;
  email: string;
  role: string;
  token: string;

}

export interface ToastMessage {
  text: string;
  type: 'success' | 'error' | 'info';
  id: number;
  progress: number;
}


export interface IMenuItem{

  label: string;
  icon: string;
  route: string;


}