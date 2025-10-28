import React, { useState } from 'react';
import Icon from '../icons/Icon';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openAccordions, setOpenAccordions] = useState<{ [key: number]: boolean }>({});

  const toggleAccordion = (index: number): void => {
    setOpenAccordions(prev => {
      if (allowMultiple) {
        return { ...prev, [index]: !prev[index] };
      } else {
        return { [index]: !prev[index] };
      }
    });
  };

  return (
    <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            style={{
              width: '100%',
              padding: 'var(--spacing-4)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--color-neutral-white)',
              border: 'none',
              borderBottom: index < items.length - 1 ? '1px solid var(--color-neutral-200)' : 'none',
              cursor: 'pointer',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-neutral-900)',
              textAlign: 'left',
              transition: 'background-color 0.2s'
            }}
          >
            <span>{item.title}</span>
            <Icon
              name={openAccordions[index] ? 'chevron-up' : 'chevron-down'}
              style={{
                width: '16px',
                height: '16px',
                color: 'var(--color-neutral-600)',
                transition: 'transform 0.2s'
              }}
            />
          </button>
          {openAccordions[index] && (
            <div style={{
              padding: 'var(--spacing-4)',
              backgroundColor: 'var(--color-neutral-white)',
              borderBottom: index < items.length - 1 ? '1px solid var(--color-neutral-200)' : 'none',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-neutral-700)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
