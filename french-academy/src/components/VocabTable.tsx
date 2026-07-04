import type { VocabItem } from '../types';

interface VocabTableProps {
  items: VocabItem[];
}

export default function VocabTable({ items }: VocabTableProps) {
  if (items.length === 0) return null;

  return (
    <div className="vocab-section">
      <h3 className="section-heading">📚 Vocabulary</h3>
      <div className="table-wrap">
        <table className="vocab-table">
          <thead>
            <tr>
              <th>French</th>
              <th>English</th>
              <th>Pronunciation</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td className="french-word">{item.french}</td>
                <td>{item.english}</td>
                <td className="pronunciation">{item.pronunciation ?? '—'}</td>
                <td>{item.gender ? (item.gender === 'm' ? '♂ masc.' : '♀ fem.') : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
