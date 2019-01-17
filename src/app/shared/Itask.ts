export interface ITask {
        searchTask: string;
        searchParentTask: string;
        searchPriorityFrom: number;
        searchPriorityTo: number;
        searchStartDate: Date;
        searchEndDate: Date;
}

export class SerachTask implements ITask {
        searchTask: string;
        searchParentTask: string;
        searchPriorityFrom: number;
        searchPriorityTo: number;
        searchStartDate: Date;
        searchEndDate: Date;
}
