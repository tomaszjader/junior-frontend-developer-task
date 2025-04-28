export interface Employee {
    firstName: string;
    lastName: string;
    id: string;
    subordinates: Employee[];
    isExpanded?: boolean;
}