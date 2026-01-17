import Resource1 from '../assets/Resource1.jpg';

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

export const resourceDetailData: ResourceDetailData = {
    title: "Prayoga Institute of Education Research - Kriya",
    author: "Tobey Marshall",
    date: "4th July 2025",
    image: Resource1,
    sections: [
        {
            heading: "Kriya Programme",
            content: "The Kriya programme fosters experiential learning by engaging students in hands-on activities that nurture scientific temperament and higher-order thinking skills. It is targeted towards students from Grade 6 to Grade 10 across schools in Karnataka.\n\nThe programme provides science lab facilities, a teaching curriculum, teacher training, online academic support and coordination, and knowledge and practice sharing among teachers and experts. Teachers are empowered with advanced pedagogical strategies, subject expertise, and effective classroom management techniques to enhance their teaching capabilities.\n\nFor CSR Impact Assessment compliance, VIC is evaluating the impact of the Kriya programme on students' interest and learning in science, teachers' teaching experiences, and the school ecosystem's role in supporting and encouraging sustain experiential learning."
        },
        {
            heading: "On-Ground Story",
            content: "Ms. Anjana* (name changed), the science teacher, shared that students are highly enthusiastic about attending lab sessions, eagerly engaging in experiments, and developing a strong interest in science—sometimes even at the expense of other subjects. Speaking about the impact of learning science on other subjects, she observed that students have started approaching other subjects in the same way they approach Kriya sessions. She noted that beyond Kriya, students pursue science learning through tuition classes, reading science books from the library, watching videos online, and exploring concepts by observing their surroundings and asking follow-up questions during sessions. For example, students take photographs of insects and elements of nature and study them in detail. Interactions with students indicated that hands-on experiments have deepened their understanding of scientific concepts and fostered a scientific temperament, enabling them to question and overcome prevalent myths and superstitions. Students expressed a clear preference for experiential learning in the lab over rote textbook study. The Kriya project has made science experiments more accessible and enjoyable, transforming the laboratory into a vibrant and engaging learning space."
        }
    ]
};
