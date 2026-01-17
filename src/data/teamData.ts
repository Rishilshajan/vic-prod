import AbhishekImg from '../assets/Abhishek.png';
import AditiImg from '../assets/Aditi.png';
import HarshaliImg from '../assets/Harshali.png';
import NasrullaImg from '../assets/Nasrulla.png';
import ChaithraImg from '../assets/Chaithra.png';
import VyshakhImg from '../assets/Vyshakh.png';
import AravindImg from '../assets/Aravind.png';

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
        role: "Founder & CEO",
        image: VyshakhImg,
        education: "Master in Management. Cornell University, USA\nB.E. in Environmental Engineering, SJCE",
        bio: "Vyshakh Anand is well renowned expert in sustainability, environment, climate action among other sectors. Vyshakh was nominated as expert member by MoEF&CC for two consecutive terms for the prestigious SEAC in Karnataka, where large projects were assessed and suitable Environmental conditions were recommended.",
        linkedin: "https://www.linkedin.com/in/vyshakhlanand/",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },
    {
        id: "abhishek-bhardwaj",
        name: "Abhishek Bhardwaj",
        role: "Advisor",
        image: AbhishekImg,
        education: "M.A. in Social Work, TISS, Mumbai\nM.Tech. in Manufacturing Management, BITS Pilani\nMasters in Marketing Management, JBIMS",
        bio: "Abhishek Bhardwaj has a robust background in Monitoring, Evaluation, and Learning (MEL), specialising in effective program management across diverse sectors and has a 16 years of experience. He has led projects focused on public health, education, livelihoods,  employability, child welfare, and sustainability.",
        linkedin: "https://www.linkedin.com/in/abhardwaj/",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },
    {
        id: "nasrulla-adamji",
        name: "Nasrulla Adamji",
        role: "Lead",
        image: NasrullaImg,
        education: "M.A. in Social Work , TISS, Mumbai\nM.Com, Mumbai University",
        bio: "Nasrulla Adamji holds an M.A. in Social Work from Tata Institute of Social Sciences (TISS), Mumbai, and an M.Com from Mumbai University. He has a decade of experience in working with Persons with Disabilities (PwDs), along with expertise in teaching, training, project management, research, and social impact assessment, and is a certified Social Impact Assessor. His work spans the NGO and development sectors, as well as entrepreneurial ventures. He has conducted a series of assessments focused on classroom teaching effectiveness, curriculum delivery efficiency, and student engagement, as well as project-level evaluations.",
        linkedin: "https://www.linkedin.com/in/nasrullaadamji/",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },
    {
        id: "chaitra-rao",
        name: "Chaitra Rao",
        role: "Associate",
        image: ChaithraImg,
        education: "BSc Economics - Birkbeck, University of London",
        bio: "Chaitra Rao holds a B.Sc. in Economics from Birkbeck, University of London. Her core areas of interest are Education, Livelihood and Climate Change, with a particular focus on improving Foundational Literacy and Numeracy (FLN) outcomes.  She has been a part of the PMU of a school transformation project and conducted qualitative research for an FLN project. At VIC, she has led in-depth qualitative research on experiential science learning programme for school students, and designed a Bayesian hierarchical IRT-based assessment of student learning outcomes across stratified clusters.",
        linkedin: "https://www.linkedin.com/in/chaitra-rao-480865115/",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },
    {
        id: "aravind-subramaniam",
        name: "Aravind Subramaniam",
        role: "Senior Analyst",
        image: AravindImg,
        education: "M. Sc. Environmental Science, Periyar University, Salem",
        bio: "Aravind is a conservation practitioner with over five years of experience in biodiversity monitoring, livelihood-linked conservation initiatives, human-wildlife conflict mitigation, community engagement, conservation outreach and wildlife crime studies. He has a proven track record in collaborating with government and academic institutions to drive applied research while working across diverse stakeholders to deliver data-driven conservation and development outcomes. He has strong grounding in herpetology, GIS mapping, and scientific reporting.",
        linkedin: "https://www.linkedin.com/in/aravind-subramaniam-229407183/",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    },

    {
        id: "aditi-madan",
        name: "Aditi Madan",
        role: "Consultant",
        image: AditiImg,
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
        image: HarshaliImg,
        education: "PhD - Indian Institute of Technology Bombay\nMA - Pune University",
        bio: "Harshali focuses on rural-urban transitions, infrastructure, and planning of transitioning settlements in Maharashtra. Harshali has over five years of experience in research and teaching, having worked as an ad-hoc Assistant Professor and visiting lecturer. She has contributed to field-based research projects on urban inclusion, infrastructure impact, and village profiling. She has presented papers and published articles at National and International conferences.",
        linkedin: "https://www.linkedin.com/in/harshali-ghule-0a4287143/",
        facebook: "#",
        instagram: "#",
        twitter: "#"
    }
];
