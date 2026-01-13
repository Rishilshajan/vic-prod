import Resource1 from '../assets/Resource1.jpg';
import Resource2 from '../assets/Resource2.png';
import Resource3 from '../assets/Resource3.png';

export interface Resource {
    id: number;
    title: string;
    description: string;
    author: string;
    image: string;
    link: string;
}

export const resources: Resource[] = [
    {
        id: 1,
        title: "Prayoga Institute of Education Research – Kriya",
        description: "The Kriya programme fosters experiential learning by engaging students in hands-on activities that nurture scientific temperament and higher-order thinking skills. It is targeted towards students from Grade 6 to Grade 10 across schools in Karnataka.",
        author: "Chaitra Rao",
        image: Resource1,
        link: "#"
    },
    {
        id: 2,
        title: "Responsible Coalition for Resilient Communities (RCRC) – Integrated Farming Cluster",
        description: "The Integrated Farming Cluster (IFC) is a programme initiated by the NRLM, launched by the NRLM and supported by the NRETP, aimed to strengthen rural livelihoods",
        author: "Chaitra Rao",
        image: Resource2,
        link: "#"
    },
    {
        id: 3,
        title: "Early Childhood Care and Education (ECCE) and the Role of Anganwadis",
        description: "In India, Early Childhood Care and Education (ECCE) under the Integrated Child Development Services (ICDS) is designed to support this crucial phase.",
        author: "Nasrulla Adamji",
        image: Resource3,
        link: "#"
    }
];
