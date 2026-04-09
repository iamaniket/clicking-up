import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { BoardSettingsPage } from '../pages/BoardSettingsPage';

function renderSettings() {
  return render(
    <MemoryRouter>
      <BoardSettingsPage />
    </MemoryRouter>
  );
}

describe('BoardSettings', () => {
  it('settings renders board name, workflow, members, integrations', () => {
    renderSettings();
    expect(screen.getByTestId('board-settings-page')).toBeInTheDocument();
    expect(screen.getByText('General')).toBeInTheDocument();
    expect(screen.getByText('Workflow')).toBeInTheDocument();
    expect(screen.getByText('Members')).toBeInTheDocument();
    expect(screen.getByText('Integrations')).toBeInTheDocument();
    expect(screen.getByText('Danger Zone')).toBeInTheDocument();
  });
});
