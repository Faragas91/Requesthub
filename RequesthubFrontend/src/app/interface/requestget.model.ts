export interface RequestGetModel {   
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    createdAt: Date;
    createdByUserId: number;
}