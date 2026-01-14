// Update interface and data
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    education?: string;
    bio?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: "vyshakh-anand",
        name: "Vyshakh V Anand",
        role: "CEO",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop", // Placeholder
        education: "Master in Management. Cornell University, USA\nB.E. in Environmental Engineering, SJCE",
        bio: "Vyshakh Anand is well renowned expert in sustainability, environment, climate action among other sectors. Vyshakh was nominated as expert member by MoEF&CC for two consecutive terms for the prestigious SEAC in Karnataka, where large projects were assessed and suitable Environmental conditions were recommended.",
        linkedin: "#",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },
    {
        id: "abhishek-bhardwaj",
        name: "Abhishek Bhardwaj",
        role: "Advisor, Research And Operations",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop", // Placeholder
        education: "M.A. in Social Work, TISS, Mumbai\nM.Tech. in Manufacturing Management, BITS Pilani\nMasters in Marketing Management, JBIMS",
        bio: "Abhishek Bhardwaj has a robust background in Monitoring, Evaluation, and Learning (MEL), specialising in effective program management across diverse sectors and has a 16 years of experience. He has led projects focused on public health, education, livelihoods,  employability, child welfare, and sustainability.",
        linkedin: "#",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },
    {
        id: "nasrulla-adamji",
        name: "Nasrulla Adamji",
        role: "Lead, Research And Operations",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop", // Placeholder
        education: "M.A. in Social Work , TISS, Mumbai\nM.Com, Mumbai University",
        bio: "Nasrulla Adamji has over 8 years of experience working with PwDs, teaching, training, project management, research and social impact assessment in the NGO and development sectors, as well as in entrepreneurial initiatives. He has executed 50+ assessment assignments.",
        linkedin: "#",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },
    {
        id: "chaitra-rao",
        name: "Chaithra Rao",
        role: "Consultant",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop", // Placeholder
        education: "BSc Economics - Birkbeck, University of London",
        bio: "Chaitra Rao is a MEL enthusiast, with a strong interest in social sector research. Her core areas of interest are Education, Livelihood and Climate Change, with a particular focus on improving Foundational Literacy and Numeracy (FLN) outcomes. She has been a part of the PMU of a school transformation project and conducted qualitative research for an FLN project.",
        linkedin: "#",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },
    {
        id: "aditi-madan",
        name: "Aditi Madan",
        role: "Consultant",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop", // Placeholder
        education: "PhD - Asian Institute of Technology, Bangkok\nMA - TISS Mumbai",
        bio: "Aditi is a Fellow at the Institute for Human Development (IHD), with over 10 years of experience. She has worked with The UNION, IQVIA (Delhi), Voluntary Health Association of India (Delhi), United Access Medical (Bangkok), ILO (Bangkok), and the National Institute of Disaster Management., USAID, the Ministry of Tribal Affairs, Ministry of Home Affairs, Department of Planning, and the Department of Social Welfare",
        linkedin: "#",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },
    {
        id: "harshali-ghule",
        name: "Harshali Ghule",
        role: "Consultant",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop", // Placeholder
        education: "PhD - Indian Institute of Technology Bombay\nMA - Pune University",
        bio: "Harshali focuses on rural-urban transitions, infrastructure, and planning of transitioning settlements in Maharashtra. Harshali has over five years of experience in research and teaching, having worked as an ad-hoc Assistant Professor and visiting lecturer. She has contributed to field-based research projects on urban inclusion, infrastructure impact, and village profiling. She has presented papers and published articles at National and International conferences.",
        linkedin: "#",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    }
];
