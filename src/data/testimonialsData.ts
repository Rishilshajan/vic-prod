export interface Testimonial {
    id: number;
    text: string;
    author: string;
    role: string;
    organization: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "“VIC was incredibly thorough in their investigation, taking everyone from grassroots stakeholders to leadership along to gain a holistic view of our work. I truly appreciated their deep dive approach. It showed a real commitment to understanding the complexities of our world.”",
        author: "Sarah Mishra",
        role: "Senior Director",
        organization: "REAP Benefit Foundation"
    },
    {
        id: 2,
        text: "“We shared a cordial and understanding relationship throughout the process. VIC took the time to truly understand our projects.”",
        author: "Neil Kamat",
        role: "Director",
        organization: "Sauramandala Foundation"
    },
    {
        id: 3,
        text: "“Really appreciated the free flowing discussions, the emphasis on fact based data, and the on site reality checks together, they made it a very comprehensive reporting process. I believe this [report] can confidently be referred to by other organisations as an independent third-party assessment.”",
        author: "N. Vidyashankar",
        role: "HPM",
        organization: "Prayoga Institute of Education Research"
    }
];
