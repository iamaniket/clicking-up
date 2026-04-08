import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EfficiencyScoreCard } from '../components/tasks/EfficiencyScoreCard';

describe('EfficiencyScoreCard', () => {
  it('renders label and value', () => {
    render(<EfficiencyScoreCard label="Completed" value={5} icon="check_circle" />);
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(<EfficiencyScoreCard label="Tasks" value={10} icon="assignment" />);
    expect(screen.getByText('assignment')).toBeInTheDocument();
  });

  it('renders trend when provided', () => {
    render(<EfficiencyScoreCard label="Done" value={3} icon="check" trend="30% done" />);
    expect(screen.getByText('30% done')).toBeInTheDocument();
  });

  it('does not render trend when not provided', () => {
    const { container } = render(
      <EfficiencyScoreCard label="Done" value={3} icon="check" />
    );
    const trendElements = container.querySelectorAll('.text-success');
    expect(trendElements).toHaveLength(0);
  });

  it('has data-testid efficiency-card', () => {
    render(<EfficiencyScoreCard label="Test" value={0} icon="test" />);
    expect(screen.getByTestId('efficiency-card')).toBeInTheDocument();
  });
});
