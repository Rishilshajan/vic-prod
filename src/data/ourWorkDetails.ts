export interface OurWorkDetailSection {
    title: string;
    items: string[];
}

export interface OurWorkDetail {
    id: number;
    title: string;
    description: string;
    sections: OurWorkDetailSection[];
}

const commonDescription = "Empowering teams with the knowledge, tools, and strategic frameworks necessary to effectively design, implement, and monitor programs. Our approach focuses on building internal capacity for data-driven decision-making, fostering a culture of learning, and ensuring accountability at every stage of development. Through tailored training sessions and long-term support, we help organizations create resilient systems that drive measurable impact and sustainable growth.";

const commonSections: OurWorkDetailSection[] = [
    {
        title: "Advisory on Program Design & Optimum Resource Allocation",
        items: [
            "Overview of digestive system functions",
            "Common bowel-related conditions (constipation, fecal incontinence, neurogenic bowel, irritable bowel symptoms)",
            "Influence of diet, hydration, and medications on bowel health"
        ]
    },
    {
        title: "Support in Aligning CSR Initiatives with UN SDGS",
        items: [
            "Recognizing signs of constipation, impaction, or blockage",
            "Identifying urgent symptoms requiring immediate medical attention",
            "Practicing infection prevention and hygiene standards"
        ]
    }
];

export const ourWorkDetails: Record<number, OurWorkDetail> = {
    1: {
        id: 1,
        title: "Impact Measurement & Advisory",
        description: commonDescription,
        sections: commonSections
    },
    2: {
        id: 2,
        title: "MEL Training & Capacity Building",
        description: commonDescription,
        sections: commonSections
    },
    3: {
        id: 3,
        title: "Research",
        description: commonDescription,
        sections: commonSections
    },
    4: {
        id: 4,
        title: "Strategy & Development",
        description: commonDescription,
        sections: commonSections
    },
    5: {
        id: 5,
        title: "CSR & SDG Alignment",
        description: commonDescription,
        sections: commonSections
    },
    6: {
        id: 6,
        title: "Tool & Framework Creation",
        description: commonDescription,
        sections: commonSections
    }
};
