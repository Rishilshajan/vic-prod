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
        // Using a placeholder that matches the office/meeting vibe
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 2,
        title: "Responsible Coalition for Resilient Communities (RCRC) – Integrated Farming Cluster",
        description: "The Integrated Farming Cluster (IFC) is a programme initiated by the NRLM, launched by the NRLM and supported by the NRETP, aimed to strengthen rural livelihoods",
        author: "Chaitra Rao",
        // Using a placeholder that matches the nature/farming vibe (papaya tree?)
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=500&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 3,
        title: "Early Childhood Care and Education (ECCE) and the Role of Anganwadis",
        description: "In India, Early Childhood Care and Education (ECCE) under the Integrated Child Development Services (ICDS) is designed to support this crucial phase.",
        author: "Nasrulla Adamji",
        // Using a placeholder for early childhood/education/wall art
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop",
        link: "#"
    }
];
