export interface Root {
    id:string
    username:string
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
    profession: string
    role:string
    assignments: any[];
  }
  
export interface assignments{
  id:string,
  title:string,
  description:string,
  users:any[];
}