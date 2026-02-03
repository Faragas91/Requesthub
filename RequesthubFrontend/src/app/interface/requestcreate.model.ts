export interface RequestCreateModel {
    title: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High';
}