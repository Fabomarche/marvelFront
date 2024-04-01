import type { Repository } from "./Repository";

export class StorageRepository implements Repository {
    private repository: Repository

    constructor(repository: Repository) {
        this.repository = repository
    }

    getItem(key: string): string | null {
        return this.repository.getItem(key);
    }

    setItem(key: string, value: string): void {
        this.repository.setItem(key, value);
    }
}

export class LocalStorageRepository implements Repository {
    getItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}