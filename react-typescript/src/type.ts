export interface Info {
  userId: number;
  name: string;
  email: string;
}

export interface AdminInfoList extends Info {
  role: string;
  department: string;
  isActive: boolean;
}
