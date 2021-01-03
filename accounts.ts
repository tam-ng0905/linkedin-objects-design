enum ConnectionStatus{
    PENDING, ACCEPTED, CONFIRMED, REJECTED, CANCELED
}


enum AccountStatus{
    ACTIVE, BLOCKED, BANNED, COMPROMISED, ARCHIVED, UNKNOWN
}

class Address{
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;

    constructor(street: string, city: string, state: string, zip: string, country:string ) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country
    }
}
class Account{
    id: string;
    password: string;
    status: AccountStatus;

    constructor(id, pass, status = AccountStatus.ACTIVE) {
        this.id = id;
        this.password = pass;
        this.status = status;
    }

    reset_pass() {

    }
}
class Person{
    name: string;
    address: string;
    email: string;
    phone: string;
    account: string;
}
class Profile{
    summary: string;
    experiences: string[];
    educations: string[];
    skills: string[];
    accomplishments: string[];
    recommendations: string[];
    stats: string[];

    // constructor(sum: string, ex: string[], edu: string[], skills: string[], acom: string[], recom: string[], stats: string[]) {
    //     this.summary = sum;
    //     this.experiences = ex;
    //     this.educations = edu;
    //     this.skills = skills;
    //     this.accomplishments = acom;
    //     this.recommendations = recom;
    //     this.stats = stats;
    // }
    constructor() {
        this.summary = '';
        this.experiences = [];
        this.educations = [];
        this.skills = [];
        this.accomplishments = [];
        this.recommendations = [];
        this.stats = [];
    }

    add_experience(experience: string){
        this.experiences.push(experience);
    }

    add_education(education: string){
        this.educations.push(education);
    }
    add_skill(skill: string){
        this.skills.push(skill);
    }
    add_accomplishments(acom: string){
        this.accomplishments.push(acom);
    }
    add_recommendation(recom: string){
        this.recommendations.push(recom);
    }


}
export class Member{
    start_date: number;
    headline: string;
    photo: string[];
    mem_suggestion: string[];
    mem_follows: string[];
    mem_connections: string[];
    company_follows: string[];
    group_follow: string[];
    profile: Profile;



    constructor() {
        this.start_date =  Date.now();
        this.headline = '';
        this.photo =  [];
        this.mem_suggestion =  [];
        this.mem_follows = [];
        this.mem_connections = [];
        this.company_follows = [];
        this.group_follow = [];
        this.profile = new Profile();
    }

    sendMess(){

    }

    create_post(){

    }

    send_connection(connection_invitation){

    }
}

