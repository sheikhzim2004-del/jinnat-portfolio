import { FiCode, FiLayers, FiPenTool, FiServer, FiSmartphone, FiTool } from "react-icons/fi";

const services = [
    {
        icon: FiCode,
        title: "Frontend Development",
        desc: "Responsive, interactive UIs with React, Next.js and Tailwind CSS."
    },
    {
        icon: FiLayers,
        title: "Full-Stack Development",
        desc: "End-to-end web apps using Node.js, Express and MongoDB."
    },
    {
        icon: FiPenTool,
        title: "UI Implementation",
        desc: "Turning designs into pixel-perfect, accessible components."
    },
    {
        icon: FiServer,
        title: "REST API Integration",
        desc: "Building and connecting APIs to power dynamic, data-driven apps."
    },
    {
        icon: FiTool,
        title: "Bug Fixing & Performance Optimization",
        desc: "Debugging issues and optimizing apps for speed and reliability."
    },
    {
        icon: FiSmartphone,
        title: "Responsive Design",
        desc: "Mobile-first layouts that work seamlessly across all devices."
    }
];

export default function ServicesSection() {
    return (
        <section className="bg-bg-dark py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <span className="text-xs font-semibold text-accent-cyan bg-card-dark px-3 py-1 rounded-full">
                    What I Do
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    My <span className="text-accent-blue">Services</span>
                </h2>
                <p className="text-gray-400 mt-2">
                    Areas I focus on when building web applications.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="bg-card-dark border border-white/5 rounded-xl p-6 hover:border-accent-blue/40 transition"
                    >
                        <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                            <s.icon className="text-accent-blue w-5 h-5" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                        <p className="text-gray-400 text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}