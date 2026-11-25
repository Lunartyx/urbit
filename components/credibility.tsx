type Evidence = { approved: boolean; title: string; description: string; sourceUrl?: string }
export function FounderIntroduction({ item }: { item: Evidence }) {
  return item.approved ? (
    <section>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </section>
  ) : null
}
function EvidenceSection({ title, items }: { title: string; items: Evidence[] }) {
  const approved = items.filter(
    (item) => item.approved && item.title.trim() && item.description.trim(),
  )
  if (!approved.length) return null
  return (
    <section>
      <h2>{title}</h2>
      <ul className="credentials">
        {approved.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            {item.sourceUrl?.startsWith("https://") && (
              <a href={item.sourceUrl}>Nachweis ansehen</a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
export const Qualifications = ({ items }: { items: Evidence[] }) => (
  <EvidenceSection title="Qualifikationen" items={items} />
)
export const TechnicalCompetencies = ({ items }: { items: Evidence[] }) => (
  <EvidenceSection title="Technische Kompetenzen" items={items} />
)
export const PortfolioProjects = ({ items }: { items: Evidence[] }) => (
  <EvidenceSection title="Eigene Projekte" items={items} />
)
export const CaseStudies = ({ items }: { items: Evidence[] }) => (
  <EvidenceSection title="Projekte aus der Praxis" items={items} />
)
export const Testimonials = ({ items }: { items: Evidence[] }) => (
  <EvidenceSection title="Kundenstimmen" items={items} />
)
