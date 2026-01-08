
export function addTaskT(task: string) {
    let tasks = displayTaskT();
    tasks.push(task);
    localStorage.setItem('taskT', JSON.stringify(tasks));
}
export function displayTaskT() {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('taskT');
        return stored ? JSON.parse(stored) as string[] : [];
    }
    return [];
}

export function deleteTask(id: number) {
    let tasks = displayTaskT();
    tasks.splice(id, 1);
    localStorage.setItem('taskT', JSON.stringify(tasks));
}



