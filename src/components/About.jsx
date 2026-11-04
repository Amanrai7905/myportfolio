import { personalInfo } from "../data/personal";
import { keyHighlightSkills } from "../data/skills";
import { useInView } from "../hooks/useInView";

const stats = [
  { value: "3.5+", label: "Years Exp" },
  { value: "50+", label: "REST APIs" },
  { value: "4+", label: "Enterprise project" },
  { value: "100%", label: "Clean Code" },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-t border-line"
    >
      <div
        className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <p className="endpoint-label mb-1.5 sm:mb-2">GET /about</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-text mb-5 sm:mb-6">
          About &amp; Professional Summary
        </h2>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-dim text-sm sm:text-base leading-relaxed">
            <p>
              I am a results-driven{" "}
              <span className="text-text font-semibold">.NET Developer</span>{" "}
              with 3+ years of professional experience architecting, developing,
              and deploying robust enterprise web applications using{" "}
              <span className="text-text font-medium">
                ASP.NET Core, C#, Entity Framework Core, and Microsoft SQL
                Server
              </span>
              .
            </p>
            <p>
              My backend expertise includes implementing{" "}
              <span className="text-text font-medium">
                JWT authentication, Role-Based Access Control (RBAC)
              </span>
              , caching architectures with{" "}
              <span className="text-text font-medium">Redis</span>, scheduled
              background workers using{" "}
              <span className="text-text font-medium">Hangfire</span>, and
              writing optimized T-SQL stored procedures and indexed queries.
            </p>
            <p>
              On the client-side, I build and integrate clean, dynamic
              single-page applications using{" "}
              <span className="text-text font-medium">
                React.js, Tailwind CSS, and RESTful APIs
              </span>
              . I strictly adhere to SOLID principles, Clean Architecture, and
              containerized deployment with Docker.
            </p>

            {/* Stats Row: 2 columns on small screens, 4 on tablet+ */}
            <div className="grid grid-cols-2 xs:grid-cols-4 gap-2.5 sm:gap-3 pt-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface border border-line rounded-lg p-2.5 sm:p-3 text-center"
                >
                  <div className="font-mono text-lg sm:text-xl font-bold text-amber">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-dim mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies Box */}
          <aside className="lg:col-span-5 bg-surface border border-line rounded-xl p-4 sm:p-6 shadow-md hover-shimmer">
            <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-line">
              <span className="font-mono text-xs uppercase tracking-wider text-amber font-semibold">
                Core Competencies
              </span>
              <span className="text-[11px] font-mono text-teal">
                Daily Drivers
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {keyHighlightSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-surfaceAlt border border-line text-text/90 font-mono skill-chip"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-line/70 text-xs text-dim space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="font-mono">Status:</span>
                <span className="text-teal font-medium font-mono">
                  {personalInfo.status}
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="font-mono">Current Location:</span>
                <span className="text-text/80">{personalInfo.location}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="font-mono">Target Cities:</span>
                <span className="text-text/80 font-mono text-[11px]">
                  Noida / Gurgaon / Blr
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
