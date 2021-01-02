class Company{
    name: string;
    description: string;
    size: number;
    job_postings: string[];

    constructor(name: string, des: string, size: number) {
        this.name = name;
        this.description = des;
        this.size = size;
        this.job_postings = [];
    }
}

class JobPosting{
    description: string;
    employment_type: string;
    location: string;
    is_fulfilled: boolean;
    date_posted: number;


    constructor(description: string, employment_type: string, location: string, is_fulfilled: boolean) {
        this.date_posted = Date.now();
        this.description = description;
        this.employment_type = employment_type;
        this.location = location;
        this.is_fulfilled = is_fulfilled
    }
}
