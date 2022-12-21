export default interface IUpdateJob {
  id: number;
  title: string;
  description: string;
  os: number;
  estimatedHours: Date;
  status: string;
  userIds: number[];
}