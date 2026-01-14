import ImpactMeasurementImg from '../assets/Impact_measurement.jpg';
import MELTrainingImg from '../assets/MEL_Training.jpg';
import ResearchImg from '../assets/Research.jpg';
import StrategyDevelopmentImg from '../assets/meeting.jpg';
import CSRAlignmentImg from '../assets/CSR.jpg';
import ToolFrameworkImg from '../assets/Tool&Framework.jpg';

export interface WorkService {
    id: number;
    title: string;
    items?: string[];
    description?: string;
    image?: string;
}

export const workServices: WorkService[] = [
    {
        id: 1,
        title: "Impact Measurement & Advisory",
        items: [
            "Needs Assessment",
            "Feasibility Study",
            "Process Evaluation",
            "Outcome Evaluation",
            "Impact Evaluation (Baseline, Midline and Endline Studies)",
            "Social Return on Investment"
        ],
        image: ImpactMeasurementImg
    },
    {
        id: 2,
        title: "MEL Training & Capacity Building",
        items: [
            "Impact Assessment Frameworks",
            "Data-based Decision Making",
            "Designing Data Collection Tools"
        ],
        image: MELTrainingImg
    },
    {
        id: 3,
        title: "Research",
        items: [
            "Quantitative",
            "Qualitative",
            "Mixed-Method",
            "Difference-in-difference",
            "Randomised Control Trial"
        ],
        image: ResearchImg
    },
    {
        id: 4,
        title: "Strategy & Development",
        items: [
            "Advisory on Programme Design and optimum resource allocation",
            "Support in aligning CSR initiatives with UN SDGs and Schedule VII activities of Companies Act 2013"
        ],
        image: StrategyDevelopmentImg
    },
    {
        id: 5,
        title: "CSR & SDG Alignment",
        description: "Evaluated an education project with a reach of 3,000+ students and 60+ schools in Karnataka.",
        image: CSRAlignmentImg
    },
    {
        id: 6,
        title: "Tool & Framework Creation",
        items: [
            "Theory of Change",
            "Logframe Matrix",
            "MEL Framework",
            "Building customised dashboards and reporting mechanisms"
        ],
        image: ToolFrameworkImg
    }
];
