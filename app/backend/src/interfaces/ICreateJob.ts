export default interface ICreateJob {
  title: string;
  description: string;
  os: number;
  estimatedHours: Date;
  userIds: number[];
}