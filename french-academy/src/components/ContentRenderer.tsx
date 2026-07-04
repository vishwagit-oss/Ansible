interface ContentRendererProps {
  content: string;
}

export default function ContentRenderer({ content }: ContentRendererProps) {
  const blocks = content.split('\n\n');

  return (
    <div className="content-renderer">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith('|')) {
          return <TableBlock key={i} content={trimmed} />;
        }

        if (trimmed.startsWith('**') && trimmed.includes(':**')) {
          return <DefinitionBlock key={i} content={trimmed} />;
        }

        if (trimmed.startsWith('- ') || trimmed.startsWith('✓')) {
          return <ListBlock key={i} content={trimmed} />;
        }

        if (trimmed.startsWith('>')) {
          return <QuoteBlock key={i} content={trimmed} />;
        }

        return <ParagraphBlock key={i} content={trimmed} />;
      })}
    </div>
  );
}

function ParagraphBlock({ content }: { content: string }) {
  return <p dangerouslySetInnerHTML={{ __html: formatInline(content) }} />;
}

function QuoteBlock({ content }: { content: string }) {
  const lines = content.split('\n').map((l) => l.replace(/^>\s?/, ''));
  return (
    <blockquote className="lesson-quote">
      {lines.map((line, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      ))}
    </blockquote>
  );
}

function ListBlock({ content }: { content: string }) {
  const items = content.split('\n').filter((l) => l.trim());
  return (
    <ul className="lesson-list">
      {items.map((item, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item.replace(/^[-✓]\s*/, '')) }} />
      ))}
    </ul>
  );
}

function DefinitionBlock({ content }: { content: string }) {
  return <p className="definition" dangerouslySetInnerHTML={{ __html: formatInline(content) }} />;
}

function TableBlock({ content }: { content: string }) {
  const rows = content.split('\n').filter((r) => r.trim() && !r.match(/^\|[-|]+\|$/));
  if (rows.length === 0) return null;

  const parseRow = (row: string) =>
    row
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());

  const headers = parseRow(rows[0]);
  const dataRows = rows.slice(1);

  return (
    <div className="table-wrap">
      <table className="lesson-table">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} dangerouslySetInnerHTML={{ __html: formatInline(h) }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, ri) => (
            <tr key={ri}>
              {parseRow(row).map((cell, ci) => (
                <td key={ci} dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}
