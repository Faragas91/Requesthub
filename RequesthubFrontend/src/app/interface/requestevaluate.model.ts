export interface RequestEvaluateModel {
    id: number;
    requestId: number;
    requestStatus: 'Open' | 'In Progress' | 'Resolved';
    dateTimeCreated: Date;
    createdBy: string;
}