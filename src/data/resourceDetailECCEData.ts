import Resource3 from '../assets/Resource3.png';

export interface ResourceDetailData {
    title: string;
    author: string;
    date: string;
    image: string;
    sections: {
        heading: string;
        content: string;
    }[];
}

export const resourceDetailECCEData: ResourceDetailData = {
    title: "Early Childhood Care and Education (ECCE) and the Role of Anganwadis",
    author: "Tobey Marshall",
    date: "4th July 2025",
    image: Resource3,
    sections: [
        {
            heading: "Project Background",
            content: "The early years of a child's life are incredibly important; they lay the foundation for lifelong learning, health, and well-being. In India, Early Childhood Care and Education (ECCE) under the Integrated Child Development Services (ICDS) is designed to support this crucial phase. ECCE combines care, nutrition, health, play, and early learning to ensure children grow up in safe, nurturing, and stimulating environments. The focus of ECCE evolves with the age of the child:\n\n• From birth to 3 years, the emphasis is on care, stimulation, and responsive interaction.\n• From 3 to 6 years, it shifts to early learning, structured play, and school readiness.\n\nAnganwadi Centres play a vital role in delivering ECCE in India. These are community-based centres that support children aged 0–6 with nutrition, healthcare, and pre-school education. With 13.99 lakh Anganwadi Centres currently operating across 36 States/UTs and 781 districts, they form the backbone of India’s early childhood support system. The National Education Policy 2020 sets a clear vision: by 2030, all children entering Grade 1 should be school-ready, and a strengthened Anganwadi network is key to achieving this."
        },
        {
            heading: "Yuva Unstoppable – Transforming Anganwadis for a Brighter Future",
            content: "At Yuva Unstoppable, Anganwadi Transformation Program is designed to turn existing centres into vibrant spaces where children can learn, grow, and thrive. Aligned with the government’s Saksham Anganwadi and Poshan 2.0 guidelines. The programme is bringing about lasting change across the Anganwadi of the states of Gujarat and Uttar Pradesh.\n\nThe programme focused on transforming 65 Anganwadi Centres with the support of CSR funding. This partnership aims to improve not just the infrastructure but the overall experience for children, parents, and Anganwadi workers."
        },
        {
            heading: "What's Changing on the Ground",
            content: "The transformation efforts are practical, meaningful, and tailored to the specific needs of Anganwadi Centres and the children they serve. Key upgrades include the renovation of infrastructure with separate, hygienic toilets for boys and girls, access to safe drinking water, and dedicated handwashing stations. To create a more engaging and supportive learning environment, the centres have also been equipped with bright, child-friendly furniture, educational and play materials, upgraded kitchen facilities, and improved storage solutions to ensure cleanliness and organisation.\n\n“We used to avoid sending our child to the Anganwadi because the centre was not well-maintained, and nothing much happened there. We only visited to collect supplies. But now, the centre has become beautiful, and everything is available—tools for measuring height, weighing scales, and play materials.” — Parent of an Anganwadi Student.\n\nThe Anganwadi Transformation Program is more than a commitment to aligning with the goals of ECCE and responding directly to community needs."
        }
    ]
};
